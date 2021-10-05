console.log(`Trabalhando com listas`);

// const salvador = `Salvador`;
// const saoPaulo = `SaoPaulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `SaoPaulo`,
    `Rio de Janeiro`,
)

listaDeDestinos.push(`Curitiba`)//adicionando um item na lista
console.log("Destinos possíveis:")
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); // removendo
console.log(listaDeDestinos);

//se eu colocar a posição somente um resultado aparecerá abaixo.

console.log(listaDeDestinos[1]);
//ou
console.log(listaDeDestinos[1], listaDeDestinos[0]);