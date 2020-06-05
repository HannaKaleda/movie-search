export default function openVirtualKeyboard() {
    document.querySelector('.search__keyboard').addEventListener('click', (event) => {
        event.target.classList.toggle('active');
        document.querySelector('.keyboard').classList.toggle('opened');
        document.querySelector('.search__input').focus();
    });
}