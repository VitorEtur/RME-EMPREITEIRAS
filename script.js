document.addEventListener('DOMContentLoaded', function() {

    // --- 1. Inicialização das Animações (AOS) ---
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });

    // --- 2. Menu Mobile ---
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');
    const closeMenu = document.querySelector('.close-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => { navMenu.classList.add('active'); });
    closeMenu.addEventListener('click', () => { navMenu.classList.remove('active'); });

    navLinks.forEach(link => {
        link.addEventListener('click', () => { navMenu.classList.remove('active'); });
    });

    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target) && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });


    // --- 3. Botão Voltar ao Topo & Header Scrolled ---
    const backToTopButton = document.getElementById('backToTop');
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
            header.classList.add('scrolled');
        } else {
            backToTopButton.classList.remove('show');
            header.classList.remove('scrolled');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });


    // --- 4. Lógica do Modal da Galeria (CUSTOMIZADO) ---
    
    // Elementos do Modal
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("img01");
    const closeModal = document.querySelector(".close-modal");
    
    // Seleciona todas as imagens da galeria
    const galleryItems = document.querySelectorAll('.gallery-item img');
    
    let currentIndex = 0; // Índice da imagem atual

    // Função para abrir o modal na imagem clicada
    galleryItems.forEach((img, index) => {
        img.parentElement.addEventListener('click', () => {
            modal.style.display = "block";
            modalImg.src = img.src;
            currentIndex = index;
        });
    });

    // Função para fechar o modal
    closeModal.addEventListener('click', () => {
        modal.style.display = "none";
    });

    // Fechar modal clicando fora da imagem
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Função global para mudar slide (precisa estar no escopo window para o onclick do HTML funcionar ou adicionar listeners)
    window.changeSlide = function(n) {
        currentIndex += n;

        // Lógica de loop (se passar da última, volta pra primeira)
        if (currentIndex >= galleryItems.length) {
            currentIndex = 0;
        }
        if (currentIndex < 0) {
            currentIndex = galleryItems.length - 1;
        }

        // Atualiza a imagem
        modalImg.src = galleryItems[currentIndex].src;
    };

    // Navegação por teclado (Seta esquerda, direita e ESC)
    document.addEventListener('keydown', function(event) {
        if (modal.style.display === "block") {
            if (event.key === "ArrowLeft") {
                changeSlide(-1);
            } else if (event.key === "ArrowRight") {
                changeSlide(1);
            } else if (event.key === "Escape") {
                modal.style.display = "none";
            }
        }
    });

});