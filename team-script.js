// Анимация появления профилей при скролле
const profileObserverOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const profileObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, profileObserverOptions);

// Наблюдаем за всеми секциями профилей
document.querySelectorAll('.profile-section').forEach(section => {
    profileObserver.observe(section);
});