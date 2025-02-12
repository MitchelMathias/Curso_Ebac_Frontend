function surgir() {
    const triggerPoint = window.innerHeight * 0.8;
    
    document.querySelectorAll('.section-fade').forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top;        
        if(sectionTop < triggerPoint) {
            section.classList.add('mostrar');
        }
    });
}

window.addEventListener('scroll', surgir);
window.addEventListener('load', surgir);