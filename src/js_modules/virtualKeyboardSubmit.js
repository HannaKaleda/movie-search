import search from "./helpers/search";

export default function virtualKeyboardSubmit() {
    const enterKeyCode = 13;
    const input = document.querySelector('.search__input');
    document.querySelector(`[key-code-${enterKeyCode}`).addEventListener('click', async () => {
        if (input.value) {
            document.querySelector('.keyboard').classList.toggle('opened');
            search();
        }
    });
}