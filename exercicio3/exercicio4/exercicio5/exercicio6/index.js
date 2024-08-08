// Function Construtora
function Carro (marca, modelo){
    this.marca = marca;
    this.modelo = modelo;
}
// Prototype para uma function que todos os carros terão
Carro.prototype.dirigir = function (){
    console.log(`${this.marca}, está dirigindo o modelo ${this.modelo}`)
};

// Instância de dois novos carros, A e B
const carroA = new Carro('Mercedes', 'BMW')
const carroB = new Carro('Toyota', 'Civic')

// Executando os métodos
carroA.dirigir()
carroB.dirigir()