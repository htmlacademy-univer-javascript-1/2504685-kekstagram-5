import { renderMiniatures } from './miniatures.js';
import { showingBigPhoto } from './fullPicture.js';

const container = document.querySelector('.pictures');

export const renderGallery = (pictures) => {
  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-picture-id]');
    if (!thumbnail) {
      return;
    }

    evt.preventDefault();
    const picId = +thumbnail.dataset.pictureId;
    const picture = pictures.find((item) => item.id === picId);
    showingBigPhoto(picture);
  });

  renderMiniatures(pictures, container);
};
