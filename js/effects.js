import { imagePreview } from './form.js';

const uploadingOverlay = document.querySelector('.img-upload__overlay');
const slider = uploadingOverlay.querySelector('.effect-level__slider');
const sliderWrapper = uploadingOverlay.querySelector('.effect-level');
const effectValue = uploadingOverlay.querySelector('.effect-level__value');
const effectList = uploadingOverlay.querySelector('.effects__list');

const Effects = {
  none: {
    filter: 'none',
    unit: '',
    options: {
      range: {
        min: 0,
        max: 100
      },
      start: 100,
      step: 1
    }
  },
  chrome: {
    filter: 'grayscale',
    units: '',
    options: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    }
  },
  sepia: {
    filter: 'sepia',
    units: '',
    options: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    }
  },
  marvin: {
    filter: 'invert',
    units: '%',
    options: {
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    }
  },
  phobos: {
    filter: 'blur',
    units: 'px',
    options: {
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    }
  },
  heat: {
    filter: 'brightness',
    units: '',
    options: {
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    }
  }
};

const initEffects = () => {
  noUiSlider.create(slider, {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 0.1,
    connect: 'lower',
    format: {
      to: (value) => {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: (value) => parseFloat(value),
    },
  });
};

const onFilterButtonChange = (evt) => {
  const evtHandler = evt.target.value;
  if (evtHandler === 'none') {
    sliderWrapper.classList.add('hidden');
    imagePreview.style.filter = 'none';
    imagePreview.removeAttribute('class');
  } else {
    sliderWrapper.classList.remove('hidden');
    imagePreview.removeAttribute('class');
    imagePreview.classList.add(`effects__preview--${evtHandler}`);
    slider.noUiSlider.updateOptions(Effects[evtHandler].options);
    slider.noUiSlider.on('update', () => {
      effectValue.value = slider.noUiSlider.get();
      imagePreview.style.filter = `${Effects[evtHandler].filter}(${effectValue.value}${Effects[evtHandler].units})`;
    });
  }
};

export { onFilterButtonChange, initEffects, effectList, sliderWrapper };
