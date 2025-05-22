let btnSearch = document.getElementById('btn-search')
let btnPrev = document.getElementById('btn-prev')
let btnNext = document.getElementById('btn-next')

let pokemonNumber = document.getElementById('pokemon_number')
let pokemonName = document.getElementById('pokemon_name')
let pokemonImage = document.getElementById('pokemon_image')
let input = document.getElementById('input_search')
let separador = document.getElementById('-')

let searchInicial = 1

function renderPokemon(pokemon){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((res) => res.json())
    .then((data) =>{
        pokemonNumber.innerText = data.id
        pokemonName.innerText = data.name
        pokemonImage.src = data.sprites.versions['generation-v']['black-white'].animated.front_default
        pokemonImage.style.display = 'block'
        input.value=''
        searchInicial = data.id
    })
    .catch((err)=> {
        pokemonName.innerText = 'Não Encontrado...'
        pokemonNumber.innerText = ''
        pokemonImage.style.display = 'none'
        separador.innerHTML = ''
    })
}

btnSearch.addEventListener('click', function(event){
    event.preventDefault()
    renderPokemon(input.value)
})

btnPrev.addEventListener('click', function(){
    
    if(searchInicial>1){
        searchInicial -=1
        renderPokemon(searchInicial)
    }
})

btnNext.addEventListener('click', function(){
    searchInicial +=1
    renderPokemon(searchInicial)
})

renderPokemon(searchInicial)
