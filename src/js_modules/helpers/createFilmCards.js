import getRate from "../APIS/getRate";
import getPoster from "../APIS/getPoster";
import properties from "../data/properties";

export default async function createFilmCards(filmsList) {
    filmsList.forEach(async (filmData) => {
        const filmRate = await getRate(filmData.imdbID);

        const film = document.createElement('div');
        film.classList.add('film', 'swiper-slide');

        film.insertAdjacentHTML(
            'beforeend',
            `<div class="film__title"><a href="https://www.imdb.com/title/${filmData.imdbID}/videogallery/">${filmData.Title}</a></div><div class="film__poster"></div><div class="film__year">${filmData.Year}</div><div class="film__rate"></div>`,
        );

        if (filmData.Poster === 'N/A') {
            film.querySelector('.film__poster').style.backgroundImage = 'url(https://ak5.picdn.net/shutterstock/videos/3885455/thumb/2.jpg)';
        } else {
            const url = await getPoster(filmData.Poster);
            film.querySelector('.film__poster').style.backgroundImage = `url(${url})`;
        }


        if (filmRate.imdbRating !== 'N/A') {
            film.querySelector('.film__rate').insertAdjacentHTML('beforeend', `<span>★</span>${filmRate.imdbRating}`);
        }

        document.querySelector('.swiper-wrapper').insertAdjacentElement('beforeend', film);
        properties.mySwiper.update();
    });
}