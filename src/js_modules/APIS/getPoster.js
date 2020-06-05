export default async function getPoster(url) {
    try {
        const response = await fetch(url);
        return response.url;
    } catch (err) {
        document.querySelector('.result').textContent = err;
        return require('../../assets/images/default.jpg');
    }
}