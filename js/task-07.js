const controlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');


controlEl.addEventListener('input', onControl);

function onControl(event) {
    textEl.style.fontSize = `${event.currentTarget.valueAsNumber}px`
}