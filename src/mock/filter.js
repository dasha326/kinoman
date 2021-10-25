const filterNames = ['Watchlist', 'History', 'Favorites'];
const generateFilter = () => {
    return filterNames.map((item) => {
        return {
            name: item,
            link: item.toLowerCase(),
        }
    })
};
export {generateFilter}