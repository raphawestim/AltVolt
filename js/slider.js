var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 40
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 40
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 40
    }
  }
  
});

$(document).ready(function () {
  console.log('teste')
  // Adicionar evento de clique às imagens dentro do Swiper
  $('.swiper-slide').on('click', function () {
    // Obter o caminho da imagem clicada
    var imagePath = $(this).find('img').attr('src');
    console.log(imagePath)

    // Abrir o popup com zoom usando Fancybox
    $.fancybox.open({
      src: imagePath,
      type: 'image',
      opts: {
        // Configurações adicionais do Fancybox, se necessário
      }
    });
  });
});