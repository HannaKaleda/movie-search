import properties from "../data/properties";

export default async function getRate(id) {
    try {
        const url = `https://www.omdbapi.com/?i=${id}&apikey=${properties.apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}