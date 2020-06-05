import '@/styles/normalize.css';
import '@/styles/style.scss';
import '@/styles/swiper.min.css';
import '@/styles/keyboard.css';
import openVirtualKeyboard from './js_modules/openVirtualKeyboard.js';
import slider from './js_modules/slider.js';
import buildStartPage from './js_modules/buildStartPage.js';
import clearInput from './js_modules/clearInput.js';
import virtualKeyboardSubmit from './js_modules/virtualKeyboardSubmit.js';
import formSubmitHandler from './js_modules/formSubmitHandler.js';
import KeyBoard from './js_modules/helpers/keyboard.js'

window.addEventListener('DOMContentLoaded', () => {
  buildStartPage();
  slider();
  clearInput();
  formSubmitHandler();
  openVirtualKeyboard();
  virtualKeyboardSubmit();
});
