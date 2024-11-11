let currentSkillIndex = 0;
const skillsWrapper = document.getElementById("skills-wrapper");
const skills = document.querySelectorAll(".skill");

function showSkill(index) {
    // Calcul de la position de translation pour afficher la compétence cible
    const offset = -index * 100; // Décale de 100% par compétence
    skillsWrapper.style.transform = `translateX(${offset}%)`;
}

function nextSkill() {
    currentSkillIndex = (currentSkillIndex + 1) % skills.length;
    showSkill(currentSkillIndex);
}

function prevSkill() {
    currentSkillIndex = (currentSkillIndex - 1 + skills.length) % skills.length;
    showSkill(currentSkillIndex);
}

// Affiche la première compétence au chargement
document.addEventListener("DOMContentLoaded", () => {
    showSkill(currentSkillIndex);
});
