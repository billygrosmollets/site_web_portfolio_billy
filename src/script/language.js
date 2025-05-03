// language.js

// Charge la langue depuis localStorage ou utilise l'anglais par défaut
function setLanguage(lang) {
    // Sauvegarder la langue choisie
    localStorage.setItem("language", lang);

    // Mettre à jour l'attribut lang de la balise <html> pour l'accessibilité
    document.documentElement.lang = lang;

    // Mettre à jour le texte de tous les éléments avec data-i18n
    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.getAttribute("data-i18n");
        element.textContent = translations[lang][key] || element.textContent;
    });

    // Mettre à jour l'icône de langue (affiche le drapeau de la langue opposée)
    document.getElementById("language-icon").src = `../assets/header/${lang === "en" ? "fr" : "en"}.svg`;
    document.getElementById("language-icon").alt = lang === "en" ? "Français" : "English";

/*    // Mettre à jour l'URL pour le SEO (ex. /page/home, /page/home)
    const newURL = `/${lang}${window.location.pathname.replace(/^\/(en|fr)/, "")}`;
    window.history.pushState({}, "", newURL);*/
}

// Charger la langue au démarrage
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("language") || "en";
    setLanguage(savedLang);
});

// Gérer le clic sur le bouton de langue
document.querySelector(".language-toggle").addEventListener("click", () => {
    const currentLang = localStorage.getItem("language") || "en";
    const newLang = currentLang === "en" ? "fr" : "en";
    setLanguage(newLang);
});
