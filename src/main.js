'use strict';
const FILM_COUNT = 20;
const START_FILM_COUNT = 10;
const SHOWING_FILMS_COUNT_BY_BUTTON = 5;
const EXTRA_FILM_COUNT = 2;

import {menuTemplate} from './components/menu.js';
import {sortTemplate} from './components/sort.js';
import {filmsContainerTemplate} from './components/films.js';
import {filmsListTemplate} from './components/films-list.js';
import {filmsListExtraTemplate} from './components/films-list-extra.js';
import {filmCardTemplate} from './components/film-card.js';
import {statisticsTemplate} from './components/statistics.js';
import {filmDetailTemplate} from './components/film-details.js';

import {generateFilter} from './mock/filter.js';
import {generateFilms} from './mock/film.js';

// Render function
const render = (container, template, place) =>{
    container.insertAdjacentHTML(place, template)
};

const films = generateFilms(FILM_COUNT);
const filmsExtra = generateFilms(EXTRA_FILM_COUNT);
const filters = generateFilter();

const siteMain = document.querySelector('main');
const siteFooter = document.querySelector('.footer');

render(siteMain, menuTemplate(filters, films), 'beforeend');
render(siteMain, sortTemplate(), 'beforeend');
render(siteMain, filmsContainerTemplate(), 'beforeend');

const filmsContainer = siteMain.querySelector('.films');
render(filmsContainer, filmsListTemplate(), 'beforeend');
render(filmsContainer, filmsListExtraTemplate('Top rated'), 'beforeend');
render(filmsContainer, filmsListExtraTemplate('Most commented'), 'beforeend');

const allFilms = filmsContainer.querySelector('.films-list');
const extraFilms = filmsContainer.querySelector('.films-list--extra');
const filmsList = allFilms.querySelector('.films-list__container');
const extraFilmsList = extraFilms.querySelector('.films-list__container');

for (let i = 0; i < START_FILM_COUNT; i++){
    render(filmsList, filmCardTemplate(films[i]), 'beforeend');
}
for (let i = 0; i < EXTRA_FILM_COUNT; i++){
    render(extraFilmsList, filmCardTemplate(filmsExtra[i]), 'beforeend');
}
const footerStatistics = siteFooter.querySelector('.footer__statistics');
render(footerStatistics, statisticsTemplate(films.length), 'beforeend');

const moreBtn = allFilms.querySelector('.films-list__show-more');
let showingFilmsCount = START_FILM_COUNT;
moreBtn.addEventListener('click', ()=>{
    const currentFilmCount = showingFilmsCount;
    console.log('currentFilmCount' + currentFilmCount);
    showingFilmsCount += SHOWING_FILMS_COUNT_BY_BUTTON;
    console.log('currentFilmCount' + currentFilmCount);
    films.slice(currentFilmCount, showingFilmsCount).forEach((film) => render(filmsList, filmCardTemplate(film), 'beforeend'));
    if (showingFilmsCount >= FILM_COUNT) moreBtn.remove();
});
//render(extraFilmsList, filmDetailTemplate(filmsExtra[1]), 'beforeend');

