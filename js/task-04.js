let counterValue = 0;

const buttonDecr = document.querySelector('[data-action="decrement"]');
const buttonIncr = document.querySelector('[data-action="increment"]');

const decrement = () => {
    counterValue -= 1;
    console.log(counterValue);
    document.querySelector("#value").innerHTML = counterValue;
};

const increment = () => {
    counterValue += 1;
    console.log(counterValue);
    document.querySelector("#value").innerHTML = counterValue;
};

buttonDecr.addEventListener("click", decrement);
buttonIncr.addEventListener("click", increment);