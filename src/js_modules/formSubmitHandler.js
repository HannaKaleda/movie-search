import search from "./helpers/search";

export default function formSubmitHandler() {
    const input = document.querySelector('.search__input');
    document.querySelector('.search__form').addEventListener('submit', async (event) => {
        document.querySelector('.keyboard').classList.remove('opened');
        event.preventDefault();
        if (input.value) {
            search();
        }
    });
}