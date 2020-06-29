export const getStation = (id) => ({ stations: { stations = {} } }) => stations[id];
export const getStationItems = (id) => ({ stations: { items = {} } }) => items[id];
export const getSearchResults = ({ stations: { searchResults = [] } }) => searchResults;