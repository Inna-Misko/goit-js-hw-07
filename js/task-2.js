const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulList = document.querySelector('#ingredients');
const createList = ingredients.map((ingrid) => {
    const listEl = document.createElement('li');
    listEl.textContent = ingrid
    return listEl
});

ulList.append(...createList)



