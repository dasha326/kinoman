import AbstractComponent from "../components/abstract-component";

export const createFilmsListTemplate = () => {
    return (
        `<section class="films-list">
          <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
    
          <div class="films-list__container"></div>
          <button class="films-list__show-more">Show more</button>
        </section>`
    );
};

export default class FilmsList extends AbstractComponent {
    getTemplate() {
        return createFilmsListTemplate();
    }
}
