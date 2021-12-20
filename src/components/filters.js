import AbstractComponent from "../components/abstract-component";

const filtersItemTemplate = (items, films) => {
    return items.map((item)=>{
        let count;
        switch (item.name) {
            case `Watchlist`:
                count = films.filter((it) => !!it.isWatchlist).length;
                break;
            case `History`:
                count = films.filter((it) => !!it.isWatched).length;
                break;
            case `Favorites`:
                count = films.filter((it) => !!it.isFavorite).length;
                break;
        }
        return (
            `<a href="#${item.link}" class="main-navigation__item">${item.name} <span class="main-navigation__item-count">${count}</span></a>`
        );
    }).join(`\n`);
};
const createFiltersTemplate = (filters, films) => {
    return (
        `<nav class="main-navigation">
            <div class="main-navigation__items">
              <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
              ${filtersItemTemplate(filters, films)}
            </div>
            <a href="#stats" class="main-navigation__additional">Stats</a>
        </nav>`
    );
};

export default class Filters extends AbstractComponent {
    constructor(filters, films) {
        super();
        this._filters = filters;
        this._films = films;
    }

    getTemplate() {
        return createFiltersTemplate(this._filters, this._films);
    }
}
