import Home from "../Pages/Home/Home";

const routes = {
    '/': Home,
}


export function router(){
    const path = window.location.pathname;
    const route = routes[path];
    const app = document.querySelector('#app');
    app.innerHTML = '';

    app.appendChild(route())
}