// script.js

// 1. Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);
themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';

themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    let targetTheme = theme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);
    themeToggle.textContent = targetTheme === 'dark' ? '☀️' : '🌙';
});

// 2. Scroll Entrance Animations (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// 3. Toggle Abstracts on Research Page
function toggleAbstract(button) {
    const abstractDiv = button.nextElementSibling;
    abstractDiv.classList.toggle('active');
    button.textContent = abstractDiv.classList.contains('active') ? 'Hide Abstract' : 'Show Abstract';
}