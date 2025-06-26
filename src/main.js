import Header from './Components/Header/Header';
import './style.css';
import fetchApi from './utils/fetchApi';
import { router } from './utils/router';

const app = document.querySelector('#app');

app.appendChild(Header());
const mainContainer = document.createElement('main');
mainContainer.id = 'main-container';

app.appendChild(mainContainer)

router();

fetchApi('pokemon', 'offset=0&limit=35')