import properties from "./data/properties";
import showFilms from "./helpers/showFilms";

export default function buildStartPage() {
    document.querySelector('.search__input').focus();
    properties.currentRequest = 'man';
    showFilms(properties.currentRequest);
}