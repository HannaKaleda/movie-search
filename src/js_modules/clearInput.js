export default function clearInput() {
    document.querySelector('.search__clear').addEventListener('click', () => {
        document.querySelector('.search__input').value = '';
    });
}