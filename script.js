// Espera o documento carregar completamente
document.addEventListener('DOMContentLoaded', function() {

    // --- 1. Inicialização das Animações (AOS) ---
    AOS.init({
        duration: 800, // Duração da animação em milissegundos
        easing: 'ease-in-out', // Tipo de transição
        once: true, // Se 'true', a animação só acontece uma vez ao rolar
        offset: 100 // Começa a animar 100px antes do elemento aparecer na tela
    });


    // --- 2. Menu Mobile ---
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');
    const closeMenu = document.querySelector('.close-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Abrir menu
    hamburger.addEventListener('click', () => {
        navMenu.classList.add('active');
    });

    // Fechar menu (clicando no X)
    closeMenu.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });

    // Fechar menu (clicando em um link)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Fechar menu (clicando fora dele - opcional, mas recomendado)
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target) && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });


    // --- 3. Botão Voltar ao Topo & Header Scrolled ---
    const backToTopButton = document.getElementById('backToTop');
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        // Verifica a posição do scroll
        if (window.scrollY > 300) {
            // Mostra o botão se rolar mais de 300px
            backToTopButton.classList.add('show');
            // Adiciona classe ao header para diminuir tamanho (opcional no CSS)
            header.classList.add('scrolled');
        } else {
            // Esconde o botão
            backToTopButton.classList.remove('show');
            header.classList.remove('scrolled');
        }
    });

    // Ação de clique para voltar ao topo
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Rolagem suave
        });
    });

});