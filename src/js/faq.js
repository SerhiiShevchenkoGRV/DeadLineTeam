import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', () => {
  // Default options
  new Accordion('.accordion-container');

  // User options
  new Accordion('.container-second', {
    duration: 500,
    showMultiple: true,
    onToggle: function (currentElement, allElements) {
      console.log(currentElement);
    },
  });

  // Define several accordions with the same options
  new Accordion(['.accordion-container', '.container-second']);

  // Detach events
  const accordion = new Accordion('.accordion-container');
  accordion.detachEvents();

  const accordionInstance = new Accordion('.accordion-container', {
    duration: 300,
    showMultiple: false,
    elementClass: 'ac',
    triggerClass: 'ac-trigger',
    panelClass: 'ac-panel',
    activeClass: 'is-active',
    onOpen: element => {
      const panel = element.querySelector('.ac-panel');
      const icon = element.querySelector('.ac-icon');

      if (panel) {
        panel.style.maxHeight = `${panel.scrollHeight}px`;
        panel.style.overflow = 'visible';
      }

      if (icon) {
        icon.style.transform = 'rotate(180deg)';
      }
    },
    onClose: element => {
      const panel = element.querySelector('.ac-panel');
      const icon = element.querySelector('.ac-icon');

      if (panel) {
        panel.style.maxHeight = null;
        panel.style.overflow = 'hidden';
      }

      if (icon) {
        icon.style.transform = 'rotate(0deg)';
      }
    },
  });

  // Сховати псевдоелемент ::after
  const style = document.createElement('style');
  style.textContent = `.ac .ac-trigger::after { display: none !important; }`;
  document.head.appendChild(style);
});
