document.addEventListener('DOMContentLoaded', () => {
    // Scroll reveal
    const revealEls = document.querySelectorAll('.reveal, .pilares__grid');
    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('is-visible');
                io.unobserve(entry.target);
            }
        })
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));

    // Newsletter feedback
    const newsletterForm = document.querySelector('.newsletter-form');
    if(newsletterForm){
        newsletterForm.addEventListener('submit', () => {
            const email = newsletterForm.querySelector('input[type="email"]').value;
            if(email){
                alert('Obrigado por assinar!');
            }
        })
    }
    const headers = document.querySelectorAll('.accordion-header');
    headers.forEach(header => {
        header.addEventListener('click', () => {
            header.classList.toggle('active');
            const body = header.nextElementSibling;
            if(body.style.maxHeight){
                body.style.maxHeight = null;
            } else {
                body.style.maxHeight = body.scrollHeight + "px";
            }
        });
    });
});