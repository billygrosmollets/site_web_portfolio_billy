document.addEventListener('DOMContentLoaded', function() {
    // Texts to display in sequence
    const texts = [
        "Aspiring Full Stack Developer",
        "Student",
        "Loves Learning New Things"
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;
    let deletingDelay = 50;
    let pauseBeforeDelete = 1500;
    let pauseBeforeNextText = 500;

    const typingElement = document.getElementById('typing-text');

    function type() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            // Delete characters
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;

            // When all characters are deleted
            if (charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(type, pauseBeforeNextText);
                return;
            }

            setTimeout(type, deletingDelay);
        } else {
            // Add characters
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;

            // When all characters are written
            if (charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(type, pauseBeforeDelete);
                return;
            }

            setTimeout(type, typingDelay);
        }
    }

    // Start typing effect
    setTimeout(type, pauseBeforeNextText);
});
