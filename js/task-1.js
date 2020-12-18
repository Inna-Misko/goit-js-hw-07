const allCategoriesRef = [...document.querySelectorAll('li.item')]
console.log(`В списке ${allCategoriesRef.length} категории`)
const findTitlesList = allCategoriesRef.map(item => {
    const title = item.querySelector('h2');
    const list = item.querySelectorAll('ul li')
    return {
        title,
        list
    }
});
console.log(findTitlesList)
console.log(findTitlesList[0].title.textContent)
console.log(findTitlesList[0].list.length)
console.log(findTitlesList[1].title.textContent)
console.log(findTitlesList[1].list.length)
console.log(findTitlesList[2].title.textContent)
console.log(findTitlesList[2].list.length)