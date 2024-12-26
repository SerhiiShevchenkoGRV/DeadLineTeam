import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', () => {
  new Accordion('.accordion-container', {
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

  //pseudo-element ::after
  const style = document.createElement('style');
  style.textContent = `
    .ac .ac-trigger::after {
      display: none !important;
    }
  `;
  document.head.appendChild(style);
});
