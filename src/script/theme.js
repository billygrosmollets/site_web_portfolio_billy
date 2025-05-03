document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const html = document.documentElement;

    const setTheme = (theme) => {
        html.setAttribute('data-theme', theme);
        themeIcon.src = theme === 'light' ? '../assets/header/sun.svg' : '../assets/header/moon.svg';
        themeIcon.alt = theme === 'light' ? 'Light Theme' : 'Dark Theme';
        localStorage.setItem('theme', theme);
    };

    // Load saved theme or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        setTheme(currentTheme === 'light' ? 'dark' : 'light');
    });
});
