/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/

const FILM_COUNT = 5;
const EXTRA_FILM_COUNT = 2;
const menuTemplate = () => {
    return (
        `<nav class="main-navigation">
            <div class="main-navigation__items">
              <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
              <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>
              <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
              <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
            </div>
            <a href="#stats" class="main-navigation__additional">Stats</a>
        </nav>`
    )
};
const sortTemplate = () => {
    return (
        `<ul class="sort">
            <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
            <li><a href="#" class="sort__button">Sort by date</a></li>
            <li><a href="#" class="sort__button">Sort by rating</a></li>
        </ul>`
    )
};
const filmsContainerTemplate = () => {
    return (
        `<section class="films"></section>`
    )
};
const filmsListTemplate = () => {
    return (
        `<section class="films-list">
          <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
    
          <div class="films-list__container">
          </div>
    
          <button class="films-list__show-more">Show more</button>
        </section>`
    )
};
const filmsListExtraTemplate = () => {
    return (
        `<section class="films-list--extra">
          <h2 class="films-list__title">Top rated</h2>
    
          <div class="films-list__container">
          </div>
        </section>`
    )
};
const filmsCardTemplate = () => {
    return (
        `<article class="film-card">
          <h3 class="film-card__title">The Dance of Life</h3>
          <p class="film-card__rating">8.3</p>
          <p class="film-card__info">
            <span class="film-card__year">1929</span>
            <span class="film-card__duration">1h 55m</span>
            <span class="film-card__genre">Musical</span>
          </p>
          <img src="./images/posters/the-dance-of-life.jpg" alt="" class="film-card__poster">
          <p class="film-card__description">Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…</p>
          <a class="film-card__comments">5 comments</a>
          <form class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
          </form>
        </article>`
    )
};

const render = (container, template, place) =>{
    container.insertAdjacentHTML(place, template)
};

const siteMain = document.querySelector('main');
render(siteMain, menuTemplate(), 'beforeend');
render(siteMain, sortTemplate(), 'beforeend');
render(siteMain, filmsContainerTemplate(), 'beforeend');

const filmsContainer = siteMain.querySelector('.films');
render(filmsContainer, filmsListTemplate(), 'beforeend');
render(filmsContainer, filmsListExtraTemplate(), 'beforeend');

const allFilms = filmsContainer.querySelector('.films-list');
const extraFilms = filmsContainer.querySelector('.films-list--extra');
const filmsList = allFilms.querySelector('.films-list__container');
const extraFilmsList = extraFilms.querySelector('.films-list__container');

for (let i = 0; i < FILM_COUNT; i++){
    render(filmsList, filmsCardTemplate(), 'beforeend');
}
for (let i = 0; i < EXTRA_FILM_COUNT; i++){
    render(extraFilmsList, filmsCardTemplate(), 'beforeend');
}






/******/ })()
;
//# sourceMappingURL=bundle.js.map