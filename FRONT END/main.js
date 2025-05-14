document.addEventListener('DOMContentLoaded', function(){
    const hamburguer = document.getElementById('hamburguer');
    const navMenu = document.getElementById ('navMenu');
    
    hamburguer.addEventListener('click', function() {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    });
    
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
    item.addEventListener('click', function(){
    hamburguer.classList.remove('active');
    navMenu.classList.remove('active');
    });
    });
    });
