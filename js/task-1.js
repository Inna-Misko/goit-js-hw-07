
// const parentRef = document.querySelector('#categories');
// console.log(`В списке ${parentRef.childElementCount} категории`)

// const items = document.querySelectorAll('.item');
// Array.prototype.forEach.call(items, (element) => {
//     const title = element.querySelector('h2').innerHTML;
//     const itemsLength = element.querySelectorAll('li').length;
//     console.log(`Категория: ${title} 
//      Количество элементов: ${itemsLength}`);
// });





const categoryRef = document.querySelector('#categories')
console.log(`'В списке ${categoryRef.childElementCount} категории.'`)

const itemRef = document.querySelectorAll('.item')
 itemRef.forEach((el) => {
    const title = el.querySelector('h2').innerHTML;
     const length = el.querySelectorAll('li').length;
     console.log(`Категория: ${title} 
     Количество элементов: ${length}`)
})














