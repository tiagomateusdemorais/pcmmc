document.addEventListener('DOMContentLoaded', function () {
    // Script para animação suave ao rolar para seções
    const links = document.querySelectorAll('nav a');
    
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        });
    });
});
