import getFilms from "../APIS/getFims";
import createFilmCards from "./createFilmCards";
import properties from "../data/properties";

export default async function showFilms(request) {
    const input = document.querySelector('.search__input');
    document.querySelector('.loader').style.display = 'block';
    const filmsList = await getFilms(request);
    if (filmsList) {
        document.querySelectorAll('.film').forEach((film) => {
            film.remove();
        });
        await createFilmCards(filmsList);
        if (input.value) {
            document.querySelector('.result').textContent = `Showing results for "${properties.currentRequest}"`;
        }
    } else {
        document.querySelector('.result').textContent = `No results for "${properties.currentRequest}"`;
    }
    setTimeout(() => {
        document.querySelector('.loader').style.display = 'none';
    }, 1000);
}