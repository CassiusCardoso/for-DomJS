function cellphone(marcaCelular, vertical, horizontal, capacidadeBateria){
    return{
        marcaCelular,
        tamanhoTela: vertical, horizontal,
        capacidadeBateria,
        
        ligar(){
            console.log('Calling ...')
        }
    }
    
}

const apple = cellphone('Apple', 150, 70, 5000);
console.log(apple)
apple.ligar()

const leNovo = cellphone('LeNovo', 100, 20, 1000);
console.log(leNovo)
leNovo.ligar()
