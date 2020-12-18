const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector('#gallery')

const createList = images.map(image => {
  // list.classList.add('item')
  const list =  `<li class="item"><img class="img-list" src="${image.url}" alt="${image.alt}"></mg></li>`
  return list


  //  решение 2
  // const imgRef = document.createElement('img')
  //  imgRef.classList.add('img-list')
  // imgRef.setAttribute('src', image.url)
  // imgRef.setAttribute('alt', Image.alt)
  // list.append(imgRef)
  // return list
  });
const finalList = createList.join(' ')
galleryRef.insertAdjacentHTML('afterbegin', finalList)






