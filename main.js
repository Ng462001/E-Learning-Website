// spinner

var spinner = function () {
    setTimeout(function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }
    }, 1);
};
spinner();

// faqs

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //Change Icon
        const icon = faq.querySelector('.faq__icon i');
        if (icon.className == 'uil uil-plus') {
            icon.className = "uil uil-minus"

        } else {
            icon.className = "uil uil-plus"
        }
    })
})

// scroll animation

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate__animated", "animate__fadeInUp"); // Add Animate.css classes
                observer.unobserve(entry.target); // Stop observing after animation triggers
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => observer.observe(element));
});

