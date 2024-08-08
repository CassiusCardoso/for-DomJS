const h1 = document.querySelector('h1');
const button = document.querySelector('button')

button.addEventListener('click', function(){
    if(h1.style.background === ''){
        h1.style.background = 'yellow'
        button.innerText = 'Alterar para fundo transparente';
    }    else if(h1.style.background === 'yellow'){
        button.removeEventListener('click', function (){
            h1.style.background = 'white';
            button.innerText = 'Voltou'
        })
    }
})