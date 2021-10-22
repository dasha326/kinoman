'use strict';
const FILM_COUNT = 5;
const EXTRA_FILM_COUNT = 2;

import {menuTemplate} from './components/menu.js';
import {sortTemplate} from './components/sort.js';
import {filmsContainerTemplate} from './components/films.js';
import {filmsListTemplate} from './components/films-list.js';
import {filmsListExtraTemplate} from './components/films-list-extra.js';
import {filmCardTemplate} from './components/film-card.js';

// Render function
const render = (container, template, place) =>{
    container.insertAdjacentHTML(place, template)
};

const siteMain = document.querySelector('main');
render(siteMain, menuTemplate(), 'beforeend');
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

for (let i = 0; i < FILM_COUNT; i++){
    render(filmsList, filmCardTemplate(), 'beforeend');
}
for (let i = 0; i < EXTRA_FILM_COUNT; i++){
    render(extraFilmsList, filmCardTemplate(), 'beforeend');
}





