import { debounce, shuffleArray } from './util.js';
import { renderPictures, removePictures } from './pictures.js';
import { photos } from './main.js';
import { COUNT_OF_FILTER } from './consts.js';

const ACTIVE_CLASS = 'img-filters__button--active';
const imgFilters = document.querySelector('.img-filters');
const imgFiltersForm = imgFilters.querySelector('.img-filters__form');

const availableFilters = {
  'filter-default': () => photos.slice(),
  'filter-random': () => shuffleArray(photos.slice()).slice(0, COUNT_OF_FILTER),
  'filter-discussed': () => photos.slice().sort((firstElement, secondElement) => secondElement.comments.length - firstElement.comments.length),
};

const isButton = (evt) => evt.target.tagName === 'BUTTON';

const onImageFiltersFormClick = debounce((evt) => {
  if (isButton(evt)) {
    removePictures();

    renderPictures(availableFilters[evt.target.id]());
  }
});

const onButtonClick = (evt) => {
  if (isButton(evt)) {
    const selectedButton = imgFiltersForm.querySelector(`.${ACTIVE_CLASS}`);

    if (selectedButton) {
      selectedButton.classList.remove(ACTIVE_CLASS);
    }

    evt.target.classList.add(ACTIVE_CLASS);
  }
};

imgFiltersForm.addEventListener('click', onImageFiltersFormClick);

imgFiltersForm.addEventListener('click', onButtonClick);
