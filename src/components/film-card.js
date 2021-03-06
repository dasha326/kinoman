import AbstractComponent from "../components/abstract-component";

const createFilmCardTemplate = (film) => {
    const {title, rating, filmYear, filmDuration, filmGenre, description, comments, posterSrc, isWatchlist, isWatched, isFavorite} = film;

    const isWatchlistClass = isWatchlist ? `film-card__controls-item--active` : ``;
    const isWatchedClass = isWatched ? `film-card__controls-item--active` : ``;
    const isFavoriteClass = isFavorite ? `film-card__controls-item--active` : ``;
    return (
        `<article class="film-card">
          <h3 class="film-card__title">${title}</h3>
          <p class="film-card__rating">${rating}</p>
          <p class="film-card__info">
            <span class="film-card__year">${filmYear}</span>
            <span class="film-card__duration">${filmDuration}</span>
            <span class="film-card__genre">${filmGenre}</span>
          </p>
          <img src="./images/posters/${posterSrc}" alt="" class="film-card__poster">
          <p class="film-card__description">${description}</p>
          <a class="film-card__comments">${comments} comments</a>
          <form class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${isWatchlistClass}">Add to watchlist</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${isWatchedClass}">Mark as watched</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite ${isFavoriteClass}">Mark as favorite</button>
          </form>
        </article>`
    );
};

export default class Film extends AbstractComponent {
    constructor(film) {
        super();
        this._film = film;
    }

    getTemplate() {
        return createFilmCardTemplate(this._film);
    }
}
