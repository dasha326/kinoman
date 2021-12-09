import FiltersComponent from './components/filters.js';
import SortComponent from './components/sort.js';
import FilmsComponent from './components/films.js';
import FilmsListComponent from './components/films-list.js';
import FilmsListExtraComponent from './components/films-list-extra.js';
import FilmComponent from './components/film-card.js';
import FilmDetailsComponent from './components/film-details.js';
import StatisticsComponent from './components/statistics.js';

import {generateFilter} from './mock/filter.js';
import {generateFilms} from './mock/film.js';
import {render, RenderPosition} from './utils.js';

const FILM_COUNT = 20;
const START_FILM_COUNT = 10;
const SHOWING_FILMS_COUNT_BY_BUTTON = 5;
const EXTRA_FILM_COUNT = 2;
const siteMain = document.querySelector(`main`);
const siteFooter = document.querySelector(`.footer`);

const renderFilm = (filmsContainer, film) => {
    const onOpenDetails = (e) => {
        e.preventDefault();
        siteFooter.after(filmDetailsElement.getElement());
    };
    const onCloseDetails = () => {
        filmDetailsElement.getElement().remove();
    };

    const filmElement = new FilmComponent(film);
    render(filmsContainer, filmElement.getElement(), RenderPosition.BEFOREEND);
    const clickImg = filmElement.getElement().querySelector(`.film-card__comments`);
    const clickComents = filmElement.getElement().querySelector(`.film-card__poster`);
    const clickTitle = filmElement.getElement().querySelector(`.film-card__title`);
    clickImg.addEventListener(`click`, onOpenDetails);
    clickComents.addEventListener(`click`, onOpenDetails);
    clickTitle.addEventListener(`click`, onOpenDetails);

    const filmDetailsElement = new FilmDetailsComponent(film);
    const closeDetailsBtn = filmDetailsElement.getElement().querySelector(`.film-details__close-btn`);
    closeDetailsBtn.addEventListener(`click`, onCloseDetails);
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
        films.slice(currentFilmCount, showingFilmsCount).forEach((film) => renderFilm(filmsContainer, film));
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
const filters = generateFilter();

render(siteMain, new FiltersComponent(filters, films).getElement(), RenderPosition.BEFOREEND);
render(siteMain, new SortComponent().getElement(), RenderPosition.BEFOREEND);

const filmsComponent = new FilmsComponent().getElement();
render(siteMain, filmsComponent, RenderPosition.BEFOREEND);
renderFilms(filmsComponent);

const footerStatistics = siteFooter.querySelector(`.footer__statistics`);
render(footerStatistics, new StatisticsComponent(films.length).getElement(), RenderPosition.BEFOREEND);
