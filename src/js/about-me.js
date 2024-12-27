import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Accordion for each section
  const aboutMeAccordion = new Accordion('.about-me', {
    duration: 300,
    showMultiple: false,
    elementClass: 'about-me-item',
    triggerClass: 'about-me-click',
    panelClass: 'about-me-content',
    activeClass: 'open',
    onOpen: element => {
      const arrow = element.querySelector('.arrow-about-me');
      if (arrow) {
        arrow.style.transform = 'rotate(-135deg)';
      }
      const panel = element.querySelector('.about-me-content');
      if (panel) {
        panel.style.maxHeight = `${panel.scrollHeight}px`;
        panel.style.overflow = 'visible';
      }
    },
    onClose: element => {
      const arrow = element.querySelector('.arrow-about-me');
      if (arrow) {
        arrow.style.transform = 'rotate(45deg)';
      }
      const panel = element.querySelector('.about-me-content');
      if (panel) {
        panel.style.maxHeight = null;
        panel.style.overflow = 'hidden';
      }
    },
  });

  // Remove pseudo-element styling if necessary
  const style = document.createElement('style');
  style.textContent = `.about-me .about-me-click::after { display: none !important; }`;
  document.head.appendChild(style);
});