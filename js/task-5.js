const inputNameRef = document.querySelector('#name-input')
const nameOutputRef = document.querySelector('#name-output')

inputNameRef.addEventListener('input', editText)
  
function editText(even) {

    nameOutputRef.textContent=even.target.value;
    if (nameOutputRef.textContent ==='') {
        nameOutputRef.textContent = 'незнакомец'
    }
}