var swiper = new Swiper('.swiper-container', {
  pagination: '.swiper-pagination',
  effect: 'coverflow',
  grabCursor: true,
  slidesPerView: 'auto',
  coverflow: {
    rotate: 20,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideSadhows: true,
  },
  loop: true,
})

// Quando l'utente scorre la pagina, mostra il pulsante
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// Quando l'utente clicca sul pulsante, torna all'inizio della pagina
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}