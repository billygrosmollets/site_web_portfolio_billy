const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();
const port = 3000;

// Middleware pour parser le corps des requêtes (formulaire et JSON)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Servir les fichiers statiques depuis la racine du projet
app.use(express.static(path.join(__dirname, '..')));

// Configurer Nodemailer pour envoyer des emails via Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'clementbilly04@gmail.com', // Ton adresse Gmail
        pass: 'pttj hvuj ctpn grxr' // Remplacer par ton mot de passe d'application
    }
});

// Route pour gérer l'envoi d'email
app.post('/send-email', (req, res) => {
    const { name, email, subject, message } = req.body;

    // Vérifier que tous les champs sont présents
    if (!name || !email || !subject || !message) {
        return res.redirect('/page/contact.html');
    }

    // Configurer l'email à envoyer
    const mailOptions = {
        from: email, // L'email de l'expéditeur (celui qui remplit le formulaire)
        to: 'clementbilly04@gmail.com', // Ton email (destinataire)
        subject: subject,
        text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    };

    // Envoyer l'email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Erreur lors de l\'envoi de l\'email:', error);
            return res.redirect('/page/contact.html');
        }
        console.log('Email sent:', info.response);
        res.redirect('/page/contact.html?success=true');
    });
});

// Lancer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
