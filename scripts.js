// JavaScript para el menú hamburguesa
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// JavaScript para el modal de inicio de sesión y suscripción
const loginBtn = document.getElementById('loginBtn');
const subscribeBtn = document.getElementById('subscribeBtn');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const closeModal = document.querySelector('.close-modal');
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

loginBtn.addEventListener('click', () => {
    openModal('login');
});

subscribeBtn.addEventListener('click', () => {
    openModal('subscribe');
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
});

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-target');
        tabContents.forEach(content => {
            content.classList.remove('active');
        });
        tabs.forEach(t => {
            t.classList.remove('active');
        });
        document.getElementById(target).classList.add('active');
        tab.classList.add('active');
    });
});

function openModal(tab) {
    modal.classList.add('active');
    document.getElementById(tab).classList.add('active');
    tabs.forEach(t => {
        if (t.getAttribute('data-target') === tab) {
            t.classList.add('active');
        }
    });
}

// JavaScript para el botón de volver arriba
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Función para abrir artículos
function openArticle(articleId) {
    alert(`Abriendo artículo: ${articleId}`);
    // Aquí puedes agregar la lógica para mostrar el contenido del artículo
}
