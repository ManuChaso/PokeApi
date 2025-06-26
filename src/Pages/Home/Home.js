import './Home.css';

import pokedexImage from '../../../assets/images/pokedex.png';

export default function Home(){
    const homeContainer = document.createElement('section');
    homeContainer.className = 'home-container';



    const pokedex = document.createElement('img');
    pokedex.src = pokedexImage;
    pokedex.className = 'pokedex';

    const hud = document.createElement('div');
    hud.className = 'pokedex-hud';



    hud.innerHTML = `
        <div class="pokedex-screen-one">
            <p class="pokemon-num">25</p>
            <img class="pokemon-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png" alt="">
        </div>

        <div class="pokedex-screen-two">
            <p class="pokemon-name">Name</p>
            <p class="pokemon-type">Type</p>
        </div>

        <div class="pokedex-buttons">
            <button class="play-sound"></button>
            <button class="prev-pokemon"></button>
            <button class="next-pokemon"></button>
        </div>
    `


    homeContainer.append(pokedex, hud);



    window.addEventListener('resize', () => {
        hud.style.width = `${pokedex.clientWidth}px`;
        hud.style.height = `${pokedex.clientHeight}px`;
    });
    return homeContainer
}