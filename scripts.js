document.addEventListener('DOMContentLoaded', () => {
    // Navegação suave para seções
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animação de hover nos projetos
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('mouseover', () => {
            project.style.transform = 'translateY(-10px)';
        });
        project.addEventListener('mouseout', () => {
            project.style.transform = 'translateY(0)';
        });
    });

    // Botão Voltar ao Topo
    const backToTopButton = document.getElementById('back-to-top');

    // Mostrar/ocultar botão ao rolar a página
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Rolagem suave ao clicar no botão Voltar ao Topo
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
