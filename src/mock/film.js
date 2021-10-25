const titlesNames = ['The Man with the Golden Arm', 'The Great Flamarion', 'Santa Claus Conquers the Martians', 'Made for Each Other', 'The Dance of Life'];
const posterNames = ['made-for-each-other.png', 'popeye-meets-sinbad.png', 'sagebrush-trail.jpg', 'santa-claus-conquers-the-martians.jpg', 'the-dance-of-life.jpg', 'the-great-flamarion.jpg', 'the-man-with-the-golden-arm.jpg'];

const getRandomIntegerNumber = (min, max) => {
    return min + Math.floor(Math.random() * (max - min));
};
const getRandomArrayItem = (array) => {
    const randomIndex = getRandomIntegerNumber(0, array.length);
    return array[randomIndex];
};
const randomDescription = () => {
    const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.';
    const textArray = text.split('. ');
    return Array.from({length: getRandomIntegerNumber(1, 5)}).map((item) => item = getRandomArrayItem(textArray)).join('. ');
};

const generateFilm = () => {
    return {
        title: getRandomArrayItem(titlesNames),
        posterSrc: getRandomArrayItem(posterNames),
        rating: '8.3',
        filmYear: getRandomIntegerNumber(1920, 1960),
        filmDuration: '1h 55m',
        filmGenre: 'Musicall',
        description: randomDescription(),
        comments: getRandomIntegerNumber(0, 5),
        isWatchlist: Math.random() > 0.5,
        isWatched: Math.random() > 0.5,
        isFavorite: Math.random() > 0.5
    };
};
const generateFilms = (count) => {
    return new Array(count).fill('').map(generateFilm);
};

export {generateFilm, generateFilms}