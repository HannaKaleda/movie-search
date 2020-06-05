import getTranslation from "../APIS/getTranslation";
import properties from "../data/properties";
import showFilms from "./showFilms";

export default async function search() {
    const input = document.querySelector('.search__input');
    if ((/(^[А-я0-9\s]+)(?!.*[A-z])$/.test(input.value))) {
        const translation = await getTranslation(input.value);
        properties.currentRequest = translation.text.join('');
    } else {
        properties.currentRequest = input.value;
    }
    await showFilms(properties.currentRequest);
}