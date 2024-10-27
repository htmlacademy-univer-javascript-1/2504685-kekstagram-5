import {
  getRandomInt,
  getRandomArrayElement,
  generateCommentId } from './unit.js';

const PICTURES_COUNT = 25;
const MIN_LIKES_COINT = 15;
const MAX_LIKES_COUNT = 200;
const AVATAR_COUNT = 6;
const COMMENT_COUNT = 30;
const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.'
];
const DESCRIPTIONS = [
  'Некоторые моменты стоят того, чтобы помнить их вечность. <3',
  'Цветы - лучшие друзья девушек. Или бриллианты. Или всё вместе. ;)',
  'Вид из моей квартиры просто создан для того, чтобы наблюдать за закатами #закат',
  'Спасибо @my_friend за такой неожиданный сюрприз!',
  'Долгожданный полет домой!',
  'Это пушистое чудо устроило полный кавардак на следующий же день после уборки!',
  'Обновки! Обожаю #шоппинг'
];
const NAMES = ['Артём', 'Катя', 'Альбина', 'Кузя', 'Женя', 'Анатолий', 'Ксеня', 'Александра', 'Алёна'];

export const createMessage = () => Array.from (
  { length: getRandomInt(1, 2)},
  () => getRandomArrayElement(COMMENTS),).join('');

export const createComment = () => ({
  id: generateCommentId()(),
  avatar: `img/avatar-${getRandomInt(1, AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

export const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInt(MIN_LIKES_COINT, MAX_LIKES_COUNT),
  comments: Array.from(
    {length: getRandomInt(0, COMMENT_COUNT)},
    createComment,
  )
});

export const getPicture = () => Array.from(
  { length: PICTURES_COUNT },
  (_, index) => createPicture(index + 1),
);
