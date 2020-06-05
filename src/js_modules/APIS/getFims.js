import properties from "../data/properties";

export default async function getFilms(request) {
    try {
        const url = `https://www.omdbapi.com/?s=${request}&apikey=${properties.apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        return data.Search;
    } catch (err) {
        document.querySelector('.result').textContent = err;
    }
}