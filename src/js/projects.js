import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 16,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    keyboard: {
      enabled: true,
    },
    mousewheel: true,
    on: {
      init: function () {
        updateButtonsState(this);
      },
      slideChange: function () {
        updateButtonsState(this);
      },
    },
  });

  function updateButtonsState(swiperInstance) {
    const prevButton = document.querySelector('.swiper-button-prev');
    const nextButton = document.querySelector('.swiper-button-next');

    if (swiperInstance.isBeginning) {
      prevButton.setAttribute('disabled', 'true');
      prevButton.classList.add('disabled');
    } else {
      prevButton.removeAttribute('disabled');
      prevButton.classList.remove('disabled');
    }

    if (swiperInstance.isEnd) {
      nextButton.setAttribute('disabled', 'true');
      nextButton.classList.add('disabled');
    } else {
      nextButton.removeAttribute('disabled');
      nextButton.classList.remove('disabled');
    }
  }
});
