let form = document.querySelector('.form');
let height = document.querySelector('.height');
let weight = document.querySelector('.weight');
let button = document.querySelector('.btn');
let score = document.querySelector('.score');
let result = document.querySelector('.result');

button.addEventListener('click', () => {
    let newHeight = parseFloat(height.value);
    let newWeight = parseFloat(weight.value);

    let bmi = (newWeight / (newHeight *newHeight)).toFixed(2);
    score.innerHTML = bmi;

    if (isNaN(newHeight) || isNaN(newWeight)) {
        score.innerHTML = 'Fill the form first'
        return;
    }


    if ( bmi < 18.5 ) {
        result.style.backgroundColor = '#f6e58d';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        result.style.backgroundColor = '#badc58';
    } else if (bmi >= 25 && bmi <= 29.9) {
        result.style.backgroundColor = '#ff7979';
    } else {
        result.style.backgroundColor = '#eb4d4b';
    }
    result.firstElementChild.style.color = '#ffffffff';
})




form.addEventListener('submit', (e) => {
    e.preventDefault();
})