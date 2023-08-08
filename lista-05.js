// 1. Reconsidere o exemplo sobre as compras de produtos apresentado na aula sobre registros. Seu programa deve ser capaz de:


const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
    { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true },
    { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
    { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
    { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true },
]

// (a) Mostrar o carrinho de compras com o preço dos produtos em outra moeda, aplicando-se alguma taxa de câmbio

const cambio = (taxa) => (registro) => registro.map(({nome,qtde,preco, fragil}) => {
    return {nome,qtde,preco: preco * taxa, fragil}
} )

/* console.log(cambio(0.5)(carrinho)) */

// (b) Calcular o valor total gasto com a compra

const somar = (acc, x) => acc + x
const getTotal = (produto) => produto.preco * produto.qtde

const somatorio = (registro) => registro.map(getTotal).reduce(somar,0)

/* console.log(`Seu total é ${somatorio(carrinho)} reais.`) */


// (c) Calcular o valor total gasto aplicando-se algum desconto

const desconto = (desc) => (registro) => registro.map(getTotal).reduce(somar,0) * (1 - desc)

const desc = 0.35

/* console.log(`Seu desconto é de ${desc * 100}% e seu total ficou ${desconto(desc)(carrinho)} reais.`) */

//  (d) Calcular o valor total gasto com os produtos frágeis

const frageis = (registro) => registro.filter((produto) => produto.fragil).map(getTotal).reduce(somar,0)

/* console.log(`Todos os produtos frágeis custam ${frageis(carrinho)} reais.`) */

// (e) Calcular o valor total gasto com produtos que se iniciam com uma determinada letra (ex. letra 'C')

const letra = (letra) => (registro) => registro.filter((produto) => produto.nome[0] == letra).map(getTotal).reduce(somar,0)

/* console.log(letra('C')(carrinho)) */

// (f) Calcular o valor médio gasto por tipo de produto com a compra realizada.
// Tipos de produtos: Frágeis e Não frágeis
// Se fosse tipo uma carteira virtual, seria mais bem dividido em Casa, Alimentação, Lazer, etc.

const qtdeTotal = (registro) => registro.reduce((acc,produto) => acc + produto.qtde,0)

/* console.log(`Seu valor médio gasto em produtos frágeis foi ${frageis(carrinho)/qtdeTotal(carrinho)} reais e em produtos não frágeis foi ${(somatorio(carrinho) - frageis(carrinho))/qtdeTotal(carrinho)} reais.`) */


// Q2. Programa para encontrar o último elemento de uma lista passada. [dica: considere o uso da função pré-definida indexOf(...)]. Ex: ['Ana','Bia','Marcela','Carlos','Maria'] → 'Maria'. Faça também para encontrar o penúltimo.

const array = ['Ana','Bia','Marcela','Carlos','Maria']

const nElemento = (index) => (lista) => `${lista.filter((elemento) => lista.indexOf(elemento) == lista.length - 1 * index)}`

// Último insira 1
// Penúltimo insira 2
// Primeiro insira lista.length
/* console.log(nElemento(1)(array))
console.log(nElemento(2)(array))
 */

// Q3. Programa retornar o número de elementos numa lista. Ex: [3,5,-1,4,0] -> 5
const array2 = [3,5,-1,4,0]

const length = (lista) => lista.length
const semLength = (lista) => {
    const novaLista = lista.map((elemento) => lista.indexOf(elemento))
    return novaLista.reduce((previousIndex, currentIndex) => previousIndex > currentIndex ? previousIndex : currentIndex) + 1
} // O que a função reduce retorna a cada iteração é o que o valor do 'acumulador'/previousIndex vai assumir na próxima iteração.

/* console.log(length(array2))
console.log(semLength(array2)) */

// Q4  Programa para contar quantos elementos presentes numa primeira lista estão presentes numa segunda. Dica: o index de um elemento inexistente é -1. Ex: ['Ana','Bia','Marcela','Carlos','Maria'] e ['Bia','João, 'Marcela','Carlos','Camila'] → 3 // Intersecção

const array3 = ['Ana','Bia','Marcela','Carlos','Maria'] 
const array4 = ['Bia','João','Marcela','Carlos','Camila']

const emComum = (lista1) => (lista2) => lista1.filter((elemento) => lista2.indexOf(elemento) != -1).length
/* 
console.log(emComum(array3)(array4))
console.log(emComum(array4)(array3)) */

// Q5. Programa para somar todos os múltiplos de 3 e os múltiplos de 5, que são menores que 1000


const gerarMultiplos = (num) => (limite) => {
    
    if (limite % num === 0) { // Definir se o limite já é o último múltiplo do número
        const ultimoMultiplo = limite
        const qtdeDeMultiplos = ultimoMultiplo/num - 1
        /* Utilizando o construtor Array() e a qtde de múltiplos, criamos um array vazio com a exata qtde de múltiplos.
            Utilizando o spread operator ... podemos "separar" cada um dessas lacunas e com a notação literal do array (colchetes), as colocamos dentro de um novo array chamado multiplos.
            Com o map, modificamos cada uma das lacunas para o número * o índice daquela lacuna.
            Não podemos deixar de usar os colchetes pois map só funciona com listas e o spread operator não funcionaria corretamente. */
        const multiplos = [...Array(qtdeDeMultiplos)].map((e,i) => (i + 1) * num)
        return multiplos }
    else {
        const ultimoMultiplo = (limite - (limite % num))
        const qtdeDeMultiplos = ((ultimoMultiplo - num) / num ) + 1
        const multiplos = [...Array(qtdeDeMultiplos)].map((e,i) => (i + 1) * num) 
        
        return multiplos 
    } 
    // Tive que repetir a declaração de múltiplos pois deu erro de escopo (A constante era declara mas não podia ser chamada fora do bloco do if/else).
} 

const somarMultiplos = (array1) => (array2) => {
    return array1.filter((n) => array2.indexOf(n) == -1 ).reduce(somar,0) + array2.reduce(somar,0) // somar é uma função definida anteriormente para somar todos os elementos do array
}

console.log(somarMultiplos(gerarMultiplos(3)(1000))(gerarMultiplos(5)(1000))) 



 const multiplosDe3 = range(3,1000,3)
const multiplosDe5 = range(5,1000,5) 
const somarMultiplos2 = (n1) => (n2) => (limite) => {
    const naturais = range(1,limite,1)
    naturais.pop()
        return naturais.filter((num) => !(num % n1) || !(num % n2)).reduce(somar,0)
}
console.log(somarMultiplos2(3)(5)(1000))

 const somatorioDeMultiplos = (num) => (limite) => {
    if (limite % num === 0){
        const qtdeDeMultiplos = limite/num - 1
        return (limite) * qtdeDeMultiplos / 2
    } else {
        const ultimoMultiplo = limite - (limite % num)
        const qtdeDeMultiplos = ((ultimoMultiplo - num)/num) + 1
        return (ultimoMultiplo + num) * qtdeDeMultiplos / 2
    }
}
console.log(somatorioDeMultiplos(3)(1000) + somatorioDeMultiplos(5)(1000) - somatorioDeMultiplos(15)(1000))  

// Q6.  Programa para retornar a diferença entre o quadrado da soma dos 10 primeiros números naturais e a soma dos quadrados dos primeiros 10 números naturais. Ou seja, 

const naturais = [1,2,3,4,5,6,7,8,9,10]
const soma = (acc,x) => acc + x
const sqrtSomaPelaSomasqrt = (lista) => lista.reduce(soma,0) ** 2 - lista.map((e) => e * e).reduce(soma,0) 

/* console.log(sqrtSomaPelaSomasqrt(naturais)) */

// Q7. Programa para retornar a lista de todos os números primos menores que um número natural n qualquer 
import { range } from './utils.js'
const primos = (n) => {
  const naturais = range(2,n)
    return naturais.filter
    

}


 // [2,3,5,7]
// Q8.  Programa para retornar os  n primeiros algarismos de um número inteiro qualquer

const primeirosNAlgarismos = (n) => (num) => {
    const array = String(parseInt(num)).split('').map(Number)
    return array.filter((x) => array.indexOf(x) < n)
}


// Q9. Programa para retornar o número total de letras usadas na escrita por extenso em inglês dos números cardinais presentes numa sequência de valor máximo 1000 ('one thousand'). Exemplo: 225 ---> 'two hundred twenty five' ---> 20
// tenho um padrão a partir de 100 (one hundred) e até 1000 ( one thousand)
// com 1 dígito vai ser a unidade 
// com 2 dígitos precisamos das dezenas + unidades
// com 3 dígitos precisamos da primeira unidade + hundred + dezena + unidade
// Acaba com 1000

const extenso = (num) => {
    if (num > 1000) return 'Só aceitamos números até 1000.'
    if (num === 1000) return 'One thousand'.length
    const numero = String(parseInt(num)).split('').map(Number)

    const units = ['one','two','three','four','five','six','seven','eight','nine']
    const dezenas = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    const especiais = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
    
    if (numero[2]){
        const ultimosDois = Number(`${numero[1]}${numero[2]}`)
        if ( ultimosDois == 10 || ultimosDois == 11 || ultimosDois == 12 || ultimosDois == 13 || ultimosDois == 14 || ultimosDois == 15 || ultimosDois == 16 || ultimosDois == 17 ||ultimosDois == 18 || ultimosDois == 19){ 
            return `${units[numero[0] - 1]} hundred ${especiais[ultimosDois - 10]}`.length 
        } else {
        return `${units[numero[0] - 1]} hundred ${dezenas[numero[1] - 2]} ${units[numero[2] - 1]}`.length } 
        
    } else{
        const ultimosDois = Number(`${numero[0]}${numero[1]}`)
        if (ultimosDois == 10 || ultimosDois == 11 || ultimosDois == 12 || ultimosDois == 13 || ultimosDois == 14 || ultimosDois == 15 || ultimosDois == 16 || ultimosDois == 17 ||ultimosDois == 18 || ultimosDois == 19){ 
            return `${especiais[ultimosDois - 10]}`.length
        } else {
            return `${dezenas[numero[0] - 2]} ${units[numero[1] - 1]}`.length
        }
    }
}

console.log(extenso(212))
console.log(extenso(897))
console.log(extenso(1001))
console.log(extenso(1000))
console.log(extenso(13))
console.log(extenso(25))

// Q10. Programa para replicar os elementos de uma lista um determinado número de vezes. Exemplo: replica [1,2,3] 4 vezes ---> [1,1,1,1,2,2,2,2,3,3,3,3]
const newLista = []
const replicar = (n) => (lista) => {
    if (n == 0){
        return newLista.sort((a,b) => a - b)
    } else {
        newLista.push(...lista)
        return replicar(n - 1)(lista)
    }
} // totalmente impura ? 

console.log(replicar(4)([1,2,3]))