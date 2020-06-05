export default async function getTranslation(request) {
    try {
        const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200322T155651Z.de98a60e6a99185e.089aea4237b51c6db082c966f27a7895cd1e8b44&text=${request}&lang=ru-en`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {
        document.querySelector('.result').textContent = err;
    }
}