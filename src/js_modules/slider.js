import Swiper from './helpers/swiper.min.js';
import properties from './data/properties.js';
import getFilms from './APIS/getFims.js';
import createFilmCards from './helpers/createFilmCards.js';


export default function slider() {
    properties.mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            // when window width is >= 426px
            426: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1021: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        on: {
            async reachEnd() {
                properties.page += 1;
                const filmsList = await getFilms(`${properties.currentRequest}&page=${properties.page}`);
                if (filmsList) {
                    await createFilmCards(filmsList);
                }
            },
        },
    });
}