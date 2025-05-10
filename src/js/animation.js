document.addEventListener('DOMContentLoaded', function() {
    const logoImage = document.querySelector('.logo_inicio img');
    
    // Animação ao scroll
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        logoImage.style.transform = `translateY(${scrollPosition * 0.1}px) rotate(${scrollPosition * 0.1}deg)`;
    });

    // Efeito de flutuação suave
    function floatAnimation() {
        let position = 0;
        let direction = 1;
        
        setInterval(() => {
            position += 0.5 * direction;
            
            if (position >= 10 || position <= -10) {
                direction *= -1;
            }
            
            logoImage.style.transform = `translateY(${position}px)`;
        }, 50);
    }

    // Efeito de brilho ao hover
    logoImage.addEventListener('mouseover', function() {
        this.style.filter = 'brightness(1.2) drop-shadow(0 0 10px rgba(255,255,255,0.5))';
        this.style.transform = 'scale(1.1) translateY(-10px)';
    });

    logoImage.addEventListener('mouseout', function() {
        this.style.filter = '';
        this.style.transform = '';
    });

    floatAnimation();
});

// MENU

let lastScrollPosition = window.pageYOffset;
const menu = document.querySelector('.menu');
let isMenuVisible = true;

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.pageYOffset;
    
    // Determina a direção do scroll
    if (currentScrollPosition > lastScrollPosition) {
        // Scrollando para baixo
        if (isMenuVisible) {
            menu.style.transform = 'translateY(-100%)';
            menu.style.transition = 'transform 0.3s ease-in-out';
            isMenuVisible = false;
        }
    } else {
        // Scrollando para cima
        if (!isMenuVisible) {
            menu.style.transform = 'translateY(0)';
            menu.style.transition = 'transform 0.3s ease-in-out';
            isMenuVisible = true;
        }
    }
    
    lastScrollPosition = currentScrollPosition;
});