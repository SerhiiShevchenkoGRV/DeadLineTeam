import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', () => {
  // Ініціалізація Accordion
  new Accordion('.accordion-about-me', {
    duration: 300,
    showMultiple: false,
    openOnInit: [0], 
  });
});
