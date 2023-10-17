// Add an animation effect when hovering over each value
const values = document.querySelectorAll('.value');

values.forEach(value => {
    value.addEventListener('mouseover', () => {
        value.classList.add('hovered');
    });

    value.addEventListener('mouseout', () => {
        value.classList.remove('hovered');
    });
});
