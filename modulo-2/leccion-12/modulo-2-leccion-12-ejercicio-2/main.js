'use strict';

const inputMadrid = document.querySelector('.js-selector-madrid');
const inputParis = document.querySelector('.js-selector-paris');
const inputNewYork = document.querySelector('.js-selector-new-york');

const imagesM = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8ZJe0N0ZlLbma2Zmx8FhJUMeBopPv-LX26Q&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZrKsMmSxDy-DrU4QsKsUcoCEplEXmr7SRWw&usqp=CAU',
];

const imagesP = [
  'https://pbs.twimg.com/profile_images/692358905888935936/hCEynQCu_400x400.jpg',
  'https://www.hrs.com/en/media/image/3c/49/b0/De_Paris_Opera-Paris-Aussenansicht-14956_600x600.jpg',
];

const imagesN = [
  'https://www.stylist.co.uk/images/app/uploads/2018/10/20110150/gettyimages-486334510-1-256x256.jpg?w=256&h=256&fit=max&auto=format%2Ccompress',
  'https://pbs.twimg.com/profile_images/378800000377294981/4a843370787fb8e9766c5ce038093825.jpeg',
];

//uso un bucle normal porque importa el orden de los elementos (cada li tiene que llevar un número diferente del array)
function selectCity() {
  if (inputMadrid.checked) {
    for (const newImg of imagesM) {
      const newImg = document.createElement('img');
      newImg.setAttribute('src', imagesM);
      newImg.setAttribute('class', 'madrid');
      const pageUl = document.querySelector('.js-ul');
      pageUl.appendChild(newImg);
    }

    // for (let i = 0; i < imagesM.length; i++) {
    //   const newImg = document.createElement('img');
    //   const content = imagesM[i];
    //   newImg.setAttribute('src', content);
    //   newImg.setAttribute('class', 'madrid');
    //   const pageUl = document.querySelector('.js-ul');
    //   pageUl.appendChild(newImg);

    //   const removeImgP = document.querySelector('.paris');
    //   removeImgP.remove();
    //   const removeImgN = document.querySelector('.ny');
    //   removeImgN.remove();
    // }
  }
  if (inputParis.checked) {
    for (let i = 0; i < imagesP.length; i++) {
      const newImgP = document.createElement('img');
      const content = imagesP[i];
      newImgP.setAttribute('src', content);
      newImgP.setAttribute('class', 'paris');
      const pageUl = document.querySelector('.js-ul');
      pageUl.appendChild(newImgP);

      const removeImgM = document.querySelector('.madrid');
      removeImgM.remove();
      const removeImgN = document.querySelector('.ny');
      removeImgN.remove();
    }
  }
  if (inputNewYork.checked) {
    for (let i = 0; i < imagesN.length; i++) {
      const newImgN = document.createElement('img');
      const content = imagesN[i];
      newImgN.setAttribute('src', content);
      newImgN.setAttribute('class', 'ny');
      const pageUl = document.querySelector('.js-ul');
      pageUl.appendChild(newImgN);

      const removeImgP = document.querySelector('.paris');
      removeImgP.remove();
      const removeImgM = document.querySelector('.madrid');
      removeImgM.remove();
    }
  }
}
inputParis.addEventListener('change', selectCity);
inputMadrid.addEventListener('change', selectCity);
inputNewYork.addEventListener('change', selectCity);
