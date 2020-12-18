const inputRef = document.querySelector('#validation-input')
inputRef.addEventListener('change', checkValid)
const atribute = inputRef.getAttribute('data-length')

function checkValid(event) {
    inputRef.textContent = event.target.value  
   inputRef.textContent.length <= atribute ?
       inputRef.setAttribute('class', 'valid') :
        inputRef.setAttribute('class', 'invalid')
    return inputRef
}
