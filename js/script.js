// rotate text js code 
let text = document.querySelector(".text p");

text.innerHTML = text.innerHTML.split("").map((char,i)=>
    `<b style="transform:rotate(${i * 6.3}deg")>${char}</b>`
).join("");

// scroll reveal

ScrollReveal({ 
    distance:"90px",
    duration:2000,
    delay:200,
    // reset: true ,
});


ScrollReveal().reveal('.hero-info,.main-text,.proposal,.heading', { origin: "top" });

// Seleccionar el ícono del menú hamburguesa y el menú principal
const menuIcon = document.querySelector('.menu-icon');
const navList = document.querySelector('ul.navlist');

// Alternar la clase 'active' al hacer clic en el ícono
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
});
