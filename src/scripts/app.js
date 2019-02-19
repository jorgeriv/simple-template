let $contentEl = document.querySelector('#content');
let html = '';

function parseWeaknessesTpl(weaknesses) {
    let tplHtml = '';
    
    for(let weakness of weaknesses) {
        tplHtml = tplHtml + `<li>${weakness}</li>`;
    }

    return tplHtml;
}

function parsePokemonTpl(pokemon){
    let pokemonCardTpl = `
    <div class="card">
        <h1>${pokemon.name}</h1>
        <img src="${pokemon.img}">
        <ol>
        ${parseWeaknessesTpl(pokemon.weaknesses)}
        </ol>
    </div>
    `;
    return pokemonCardTpl;
}

for(let pokemon of POKEMON.pokemon) {
    html += parsePokemonTpl(pokemon);
}

$contentEl.innerHTML = html;