// Function to handle fade in and fade out
const fadeWidgets = () => {
    const widgets = document.querySelectorAll('.fade-in-section');

    const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the widget is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Fade in
                entry.target.classList.add('fade-in');
                entry.target.classList.remove('fade-out');
            } else {
                // Fade out
                entry.target.classList.add('fade-out');
                entry.target.classList.remove('fade-in');
            }
        });
    }, options);

    widgets.forEach(widget => {
        observer.observe(widget);
    });
};

// Call the function after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fadeWidgets);