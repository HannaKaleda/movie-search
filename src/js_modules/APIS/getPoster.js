export default async function getPoster(url) {
    try {
        const response = await fetch(url);
        return response.url;
    } catch (err) {
        console.log(err);
        return require('../../assets/images/default.jpg');
    }
}