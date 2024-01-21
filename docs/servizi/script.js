var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Gestione dell'evento del bottone di condivisione Facebook
document.querySelector('.fb-share-button').addEventListener('click', function(event) {
  event.preventDefault();
  // Azioni da eseguire quando il bottone di condivisione Facebook viene cliccato
  // ...
});

// Gestione dell'evento del bottone di condivisione Twitter
document.querySelector('.twitter-share-button').addEventListener('click', function(event) {
  // Azioni da eseguire quando il bottone di condivisione Twitter viene cliccato
  // ...
});

// Gestione dell'evento del bottone di condivisione WhatsApp
document.querySelector('.whatsapp-button').addEventListener('click', function(event) {
  // Azioni da eseguire quando il bottone di condivisione WhatsApp viene cliccato
  // ...
});

// Gestione dell'evento del bottone di condivisione Telegram
document.querySelector('.telegram-button').addEventListener('click', function(event) {
  // Azioni da eseguire quando il bottone di condivisione Telegram viene cliccato
  // ...
});

// Gestione dell'evento del pulsante di controllo precedente
document.querySelector('.swiper-button-prev').addEventListener('click', function(event) {
  // Azioni da eseguire quando il pulsante precedente viene cliccato
  // ...
});

// Gestione dell'evento del pulsante di controllo successivo
document.querySelector('.swiper-button-next').addEventListener('click', function(event) {
  // Azioni da eseguire quando il pulsante successivo viene cliccato
  // ...
});
