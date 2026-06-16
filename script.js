// Minimal: just fade in items on load
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.repo');
    items.forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(8px)';
        el.style.transition = `opacity 0.4s ease ${i * 0.04}s, transform 0.4s ease ${i * 0.04}s`;
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            });
        });
    });
});
