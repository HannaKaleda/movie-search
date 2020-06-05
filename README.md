# movie-search
**See application demo** - https://hannakaliada-movie-search.netlify.app/

The Movie-search application was created using **HTML, SASS, JS, Webpack** and the following **APIs**: 
1. OMDb API - http://www.omdbapi.com/
2. Yandex.Translate API - https://tech.yandex.com/translate/
3. Swiper API - https://swiperjs.com/api/

**Application description**
1. When the user opens the application, the page displays a search field and cards with information about the films for an arbitrary request specified by the developer ('man').
2. The search is carried out by the full name of the film or by the part of the name.
3. If the user enters a valid search query by which the API returns a result, the information on the cards with the films is updated.
4. When the search query is executed, the first page of the search result is loaded from the API.
5. During the execution of the search request, the page displays an indication of the loading process.
6. The number of displayed cards is adjusted to the width of the page (cards can be from 2 to 4).
7. On each card the following information about the film is displayed: title, poster, release date, IMDb rating.
8. when the end of the slider / swiper is reached, the next page of the search result from the API is loaded, if there is still data to download for this search request
pagination works by the principle of infinite scrolling.
9. In order to avoid delays in the application, the next page is loaded when the user has to scroll through a certain number of cards
10. If the user enters an incorrect search query by which the API returns an error, the data on the cards does not change, the application does not break, an error notification is displayed.
11. Errors occurring in working with the API (interruption of the connection during the request, returned errors from APIs such as 4xx, 5xx) are also processed by the client and displayed in the error notification area.

**To run the application, you need to**
1. Install Node.js
2. Clone the repository
3. Go to folder movie-search
4. To install all dependencies use `npm install`
5. To run the application use `npm start`

