import './Header.css';


export default function(){
    const header = document.createElement('header');
    header.className = 'header';

    header.innerHTML = `
        <nav>
            <ul>
                <li><a href="/poke-list">Poke List</a></li>
                <li><a href="/poke-game">Poke Game</a></li>
            </ul>
        </nav>
    `

    return header
}