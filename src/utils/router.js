import Home from "../Pages/Home/Home";
import PokeList from "../Pages/PokeList/PokeList";

const routes = {
    '/': Home,
    '/poke-list': PokeList
}


export function router(){
    const path = window.location.pathname;
    const route = routes[path];
    const main = document.querySelector('#main-container');
    main.innerHTML = '';

    main.appendChild(route())
}