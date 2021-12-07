import FiltersComponent from './components/filters.js';
import SortComponent from './components/sort.js';
import FilmsComponent from './components/films.js';
import FilmsListComponent from './components/films-list.js';
import FilmsListExtraComponent from './components/films-list-extra.js';
import FilmComponent from './components/film-card.js';
// import {statisticsTemplate} from './components/statistics.js';
// import {filmDetailTemplate} from './components/film-details.js';

import {generateFilter} from './mock/filter.js';
import {generateFilms} from './mock/film.js';
import {render, RenderPosition} from './utils.js';

const FILM_COUNT = 20;
const START_FILM_COUNT = 10;
const SHOWING_FILMS_COUNT_BY_BUTTON = 5;
const EXTRA_FILM_COUNT = 2;

const renderFilm = (filmsContainer, film) => {
    const onOpenDetail = () => {};

    const filmElement = new FilmComponent(film);
    render(filmsContainer, filmElement.getElement(), RenderPosition.BEFOREEND);
};
const renderFilms = (filmsComponent) => {
    const filmsList = new FilmsListComponent().getElement();
    render(filmsComponent, filmsList, RenderPosition.BEFOREEND);

    let showingFilmsCount = START_FILM_COUNT;
    const filmsContainer = filmsList.querySelector(`.films-list__container`);
    films.slice(0, showingFilmsCount).forEach((film) => renderFilm(filmsContainer, film));

    // Btn more
    const moreBtn = filmsList.querySelector(`.films-list__show-more`);
    moreBtn.addEventListener(`click`, ()=>{
        const currentFilmCount = showingFilmsCount;
        showingFilmsCount += SHOWING_FILMS_COUNT_BY_BUTTON;
        films.slice(currentFilmCount, showingFilmsCount).forEach((film) => renderFilm(film));
        if (showingFilmsCount >= FILM_COUNT) {
            moreBtn.remove();
        }
    });
    let showingFilmsExtraCount = EXTRA_FILM_COUNT;
    // Top rated
    const filmsListExtraTop = new FilmsListExtraComponent(`Top rated`).getElement();
    render(filmsComponent, filmsListExtraTop, RenderPosition.BEFOREEND);
    const filmsListExtraTopContainer = filmsListExtraTop.querySelector(`.films-list__container`);
    films.slice(0, showingFilmsExtraCount).forEach((film) => renderFilm(filmsListExtraTopContainer, film));

    // Most commented
    const filmsListExtraCommented = new FilmsListExtraComponent(`Most commented`).getElement();
    render(filmsComponent, filmsListExtraCommented, RenderPosition.BEFOREEND);
    const filmsListExtraCommentedContainer = filmsListExtraCommented.querySelector(`.films-list__container`);
    films.slice(0, showingFilmsExtraCount).forEach((film) => renderFilm(filmsListExtraCommentedContainer, film));
};

const films = generateFilms(FILM_COUNT);
const filmsExtra = generateFilms(EXTRA_FILM_COUNT);
const filters = generateFilter();

const siteMain = document.querySelector(`main`);
const siteFooter = document.querySelector(`.footer`);

render(siteMain, new FiltersComponent(filters, films).getElement(), RenderPosition.BEFOREEND);
render(siteMain, new SortComponent().getElement(), RenderPosition.BEFOREEND);

const filmsCompotent = new FilmsComponent().getElement();
render(siteMain, filmsCompotent, RenderPosition.BEFOREEND);
renderFilms(filmsCompotent);


// render(siteMain, sortTemplate(), `beforeend`);
// render(siteMain, filmsContainerTemplate(), `beforeend`);
//
// const filmsContainer = siteMain.querySelector(`.films`);
// render(filmsContainer, filmsListTemplate(), `beforeend`);
// render(filmsContainer, filmsListExtraTemplate(`Top rated`), `beforeend`);
// render(filmsContainer, filmsListExtraTemplate(`Most commented`), `beforeend`);
//
// const allFilms = filmsContainer.querySelector(`.films-list`);
// const extraFilms = filmsContainer.querySelector(`.films-list--extra`);
// const filmsList = allFilms.querySelector(`.films-list__container`);
// const extraFilmsList = extraFilms.querySelector(`.films-list__container`);
//
// for (let i = 0; i < START_FILM_COUNT; i++) {
//     render(filmsList, filmCardTemplate(films[i]), `beforeend`);
// }
// for (let i = 0; i < EXTRA_FILM_COUNT; i++) {
//     render(extraFilmsList, filmCardTemplate(filmsExtra[i]), `beforeend`);
// }
// const footerStatistics = siteFooter.querySelector(`.footer__statistics`);
// render(footerStatistics, statisticsTemplate(films.length), `beforeend`);
//
// const moreBtn = allFilms.querySelector(`.films-list__show-more`);
// let showingFilmsCount = START_FILM_COUNT;
// moreBtn.addEventListener(`click`, ()=>{
//     const currentFilmCount = showingFilmsCount;
//     console.log(`currentFilmCount` + currentFilmCount);
//     showingFilmsCount += SHOWING_FILMS_COUNT_BY_BUTTON;
//     console.log(`currentFilmCount` + currentFilmCount);
//     films.slice(currentFilmCount, showingFilmsCount).forEach((film) => render(filmsList, filmCardTemplate(film), `beforeend`));
//     if (showingFilmsCount >= FILM_COUNT) {
//         moreBtn.remove();
//     }
// });
// render(extraFilmsList, filmDetailTemplate(filmsExtra[1]), 'beforeend');

