import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item-about-me');

    accordionItems.forEach((item) => {
      const header = item.querySelector('.accordion-header-about-me');
      header.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
      
        accordionItems.forEach((i) => i.classList.remove('open'));

        if (!isOpen) item.classList.add('open');
      });
    });
  });