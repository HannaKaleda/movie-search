# movie-search
**See application demo** - https://hannakaliada-movie-search.netlify.app/

The Movie-search application was created using **HTML, SASS, JS, Webpack** and the following **APIs**: 
1. OMDb API - http://www.omdbapi.com/
2. Yandex.Translate API - https://tech.yandex.com/translate/
3. Swiper API - https://swiperjs.com/api/

**Application description**
1. The search field and cards with information about the movies are displayed  for the request specified by the developer ('man') when the user opens the application.
2. The search is carried out by the full name of the movie or by the part of the name.
3. The information on the cards with the movies will be updated, if the user enters a valid search query by which the API returns a result.
4. The first page of the search result is loaded from the API when the search query is executed.
5. The page displays an indication of the loading process during the execution of the search request.
6. The number of displayed cards is adjusted to the width of the page.
7. Title, poster, release date, IMDb rating are displayed on each card.
8. The next page of the search result from the API will be loaded, if there is the data to download for this search request, when the end of the slider / swiper is reached.
9. Pagination works by the principle of infinite scrolling.
10. The next page is loaded when the user has to scroll through a certain number of cards in order to avoid delays in the application.
11. If the user enters an incorrect search query by which the API returns an error, the data on the cards will not be updated, the application will not break, an error notification will be displayed.
12. Errors occurring in working with the API (interruption of the connection during the request, returned errors from APIs such as 4xx, 5xx) are also processed by the client and displayed in the error notification area.
13. Search query can be typed on the virtual keyboard. It is possible to switch the keyboard language with a mouse click (Shift + Alt)

**To run the application, you need to**
1. Install Node.js
2. Clone the repository
3. Go to folder movie-search
4. To install all dependencies use `npm install`
5. To run the application use `npm start`

