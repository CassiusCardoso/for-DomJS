function calc (n1, n2){
    if(typeof n1 !== 'number' || typeof n2 !== 'number'){
        throw new Error('Erro né')
    }
    return n1/n2
}

// Try é executado quando não há erros
// Catch é executada quando há erros
try{
    console.log(calc('10', 1));
}
    catch(error){
        console.log(error)
    }
