document.addEventListener('DOMContentLoaded', () => {
    const accordion = new Accordion('.accordion-container', {
        duration: 300,
        showMultiple: false,
        elementClass: 'ac',
        triggerClass: 'ac-trigger',
        panelClass: 'ac-panel',
        activeClass: 'is-active',
        onOpen: (element) => {
            const panel = element.querySelector('.ac-panel');
            const icon = element.querySelector('.icon use');
            if (panel) {
                panel.style.maxHeight = panel.scrollHeight + "px";
                panel.style.overflow = "visible";
            }
            if (icon) {
                icon.setAttribute('xlink:href', '#icon-arrowUP');
            }
        },
        onClose: (element) => {
            const panel = element.querySelector('.ac-panel');
            const icon = element.querySelector('.icon use');
            if (panel) {
                panel.style.maxHeight = null;
                panel.style.overflow = "hidden";
            }
            if (icon) {
                icon.setAttribute('xlink:href', '#icon-arrowDOWN');
            }
        }
    });

    // Сховати псевдоелемент ::after
    const style = document.createElement('style');
    style.textContent = `.ac .ac-trigger::after { display: none !important; }`;
    document.head.appendChild(style);
});
