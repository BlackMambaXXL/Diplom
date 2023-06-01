window.addEventListener('DOMContentLoaded', () => {

    // Анимации кнопок регистрации и авторизации
    const buttons = document.querySelectorAll('.blue-button');

    function moveButton(e, button) {
        const boundingRect = button.getBoundingClientRect();
        const xPosition = e.clientX - boundingRect.left - (boundingRect.width / 2);
        const yPosition = e.clientY - boundingRect.top - (boundingRect.height / 2);

        const maxX = 10; 
        const maxY = 10; 
        const moveX = Math.min(Math.max(-maxX, xPosition), maxX);
        const moveY = Math.min(Math.max(-maxY, yPosition), maxY);

        button.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }

    function resetButton(button) {
        button.style.transform = '';
    }

    buttons.forEach(button => {
        button.addEventListener('mousemove', e => moveButton(e, button));
        button.addEventListener('mouseleave', () => resetButton(button));
    });

});