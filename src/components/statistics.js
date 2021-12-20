import AbstractComponent from "../components/abstract-component";

const createStatisticsTemplate = (count) => {
    return (
        `<p>${count} movies inside</p>`
    );
};

export default class Statistics extends AbstractComponent {
    constructor(count) {
        super();
        this._count = count;
    }

    getTemplate() {
        return createStatisticsTemplate(this._count);
    }
}