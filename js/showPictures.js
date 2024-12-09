import { getPicture } from './data.js';

const picturesContainer = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const pictures = getPicture();

const picturesFragment = document.createDocumentFragment();

pictures.forEach(({url, description, likes, comments}) => {
  const newPicture = pictureTemplate.cloneNode(true);
  newPicture.querySelector('.picture__img').src = url;
  newPicture.querySelector('.picture__img').alt = description;
  newPicture.querySelector('.picture__likes').textContent = likes;
  newPicture.querySelector('.picture__comments').textContent = comments.length;
  picturesFragment.appendChild(newPicture);
});

picturesContainer.appendChild(picturesFragment);
