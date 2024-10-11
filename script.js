// Animación Parallax al hacer scroll
window.addEventListener('scroll', function() {
    let offset = window.pageYOffset;
    document.querySelector('.layer1').style.transform = 'translateY(' + offset * 0.5 + 'px)';
    document.querySelector('.layer2').style.transform = 'translateY(' + offset * 0.2 + 'px)';
});

// Mostrar mensaje secreto
document.getElementById('revealButton').addEventListener('click', function() {
    let message = document.getElementById('secretMessage');
    message.classList.toggle('visible');
});
