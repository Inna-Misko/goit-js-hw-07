const decrBtn = document.querySelector('.decr');
const incrBtn = document.querySelector('.incr');
const value = document.querySelector('#value');

let counterValue = 0;

const decrement = () => {
    counterValue -= 1;
  document.getElementById("value").innerHTML = counterValue;
}
decrBtn.addEventListener('click', decrement);


const increment = () => {
    counterValue += 1;
    document.getElementById("value").innerHTML = counterValue;
};
incrBtn.addEventListener('click', increment);




const divRef = document.querySelector('#counter')
divRef.classList.add('counter-div')