export function renderMiniatures(picture, picturesContainer) {
  const pictureTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');
  const pictureFragment = document.createDocumentFragment();

  picture.forEach(({url, description, likes, comments, id}) => {
    const newPicture = pictureTemplate.cloneNode(true);
    newPicture.querySelector('.picture__img').src = url;
    newPicture.querySelector('.picture__img').alt = description;
    newPicture.querySelector('.picture__likes').textContent = likes;
    newPicture.querySelector('.picture__comments').textContent = comments.length;
    newPicture.dataset.pictureId = id;
    pictureFragment.appendChild(newPicture);
  });

  picturesContainer.appendChild(pictureFragment);
}
