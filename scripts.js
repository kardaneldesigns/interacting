// Interacting

// Smash the tomato
var figure = document.querySelector('.tomato-hoverswap')
var tomato = document.querySelector('.tomato-smash')

figure.addEventListener('click', smash)

function smash() {
    tomato.id = 'smash'
    button.style.display = 'block'
    
}

// Reset 
var button = document.querySelector('.reset')

button.addEventListener('click', reset)

function reset() {
    tomato.id = ''
    button.style.display = 'none'
}
