// Анимация появления элементов при скролле
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Наблюдаем за timeline items
document.querySelectorAll('.timeline-item').forEach(el => observer.observe(el));

// Прогресс бар
function updateProgressBar() {
    const timelineContainer = document.querySelector('.timeline-container');
    const progressBar = document.getElementById('progressBar');
    
    const containerTop = timelineContainer.offsetTop;
    const containerHeight = timelineContainer.offsetHeight;
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    
    // Начинаем отсчет с начала timeline контейнера
    const scrollStart = containerTop - windowHeight;
    const scrollEnd = containerTop + containerHeight - windowHeight;
    const scrollRange = scrollEnd - scrollStart;
    
    let progress = ((scrollPosition - scrollStart) / scrollRange) * 100;
    progress = Math.max(0, Math.min(100, progress));
    
    progressBar.style.height = progress + '%';
}

window.addEventListener('scroll', updateProgressBar);
window.addEventListener('load', updateProgressBar);