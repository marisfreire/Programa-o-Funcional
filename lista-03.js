// Função pura é uma função cujo valor de retorno é determinado APENAS por seus valores de entrada, sem efeitos colaterais observáveis
// Funções de Alta Ordem são funções que aceitam outras definições de funções (Funções como argumento) e/ou retornam novas definições de funções como resultado de sua execução (Função como retorno).
// Funções como cidadãs de primeira classe são funções que tratam funções da mesma forma que tratam qualquer valor de outro tipos (ints, strings, booleanos, etc.)
// Currying é uma técnica que significa reorganizar sua escrita para que a passagem de parâmetros seja definida gradualmente. As vantagens do currying se concentram no REUSO e na APLICAÇÃO PARCIAL

const area = (l1) => (l2) => l2 * l1
const precircunferencia = (r) => (pi) => area(area(r)(r))(pi)
const circunferencia = (r) => precircunferencia(r)(3.14)
/* console.log(circunferencia(2)) */
// q1 - calcular área de um retângulo dados os comprimentos de duas arestas

const areaRet = (l1) => (l2) => l2 * l1
/* console.log(areaRet(2)(2)) */

// q2 - calcular a área de uma circunferência dado o valor do raio

const area1 = (r) => (pi = 3.14) => (r ** 2) * pi
const areaCirc = (r) => area1(r)()
/* console.log(areaCirc(2)) */

// q3 - programa para determinar se três valores passados podem representar um triângulo ou não

const isTriangle = (a) => (b) => (c) => {
    if (a === b && b === c) return true
    if (a < b + c && b < a + c && c < a + b) return true
    return false
}

/* console.log(isTriangle(2)(2)(2))  
console.log(isTriangle(3)(4)(5)) 
console.log(isTriangle(4)(5)(3)) 
console.log(isTriangle(10)(1)(2))  */

// q4 - programa para classificar um triângulo em Equilátero, Isósceles ou Escaleno


const classificar = (a) => (b) => (c) => {
    if (isTriangle(a)(b)(c)){
        if (a == b && b == c) return 'Equilátero'
            if (a != b && a != c && b != c) return 'Escaleno'
            return 'Isósceles'
    }
    return 'Não é triângulo'
}

/* console.log(classificar(2)(2)(2))
console.log(classificar(3)(4)(4))
console.log(classificar(6)(6)(4))
console.log(classificar(3)(4)(5))
console.log(classificar(1)(10)(2)) */

// q5 - calcular distância euclidiana entre dois pontos, utilizar equação geral da reta quando não for paralela a nenhum dos eixos (quando um dos x é diferente de zero ou um dos y é diferente de zero ) e versões simplificadas quando for paralela

const distanciaEuclidiana = (x1) => (y1) => (x2) => (y2) => Math.sqrt((y2 - y1) ** 2 + (x2 - x1) ** 2)
    
const distancia = (x1) => (y1) => (x2) => (y2) => {
    if (x1 == x2) return Math.abs(y2 - y1)
    if (y1 == y2) return Math.abs(x2 - x1)
    return Math.sqrt((y2 - y1) ** 2 + (x2 - x1) ** 2)
}

/* console.log(distanciaEuclidiana(2)(0)(3)(0))  // 1
console.log(distanciaEuclidiana(0)(0)(0)(0)) // 0
console.log(distanciaEuclidiana(3)(4)(7)(7)) // 5
console.log(distanciaEuclidiana(2)(0)(3)(3)) // 3.16 */

// q6 - fornecido três valores a, b e c escreva um programa que retorne quantos dos três são iguais

const quantosIguais = (a) => (b) => (c) => {
    const isEqual = (a) => (b) => a == b ? 1 : 0
    const total = isEqual(a)(b) + isEqual(b)(c) + isEqual(a)(c)
    if (total == 1) return total + 1
    return total
}

/* console.log(quantosIguais(2)(2)(2)) // 3
console.log(quantosIguais(2)(3)(2)) // 2
console.log(quantosIguais(3)(2)(2)) // 2
console.log(quantosIguais(2)(2)(3)) // 2
console.log(quantosIguais(3)(4)(5)) // 0 */


// q7 - retornar o menor valor entre três números quaisquer usando o sub problema de determinar o menor valor entre dois numeros quaisquer. retorne o próprio valor em caso de valores iguais

const menor = (a) => (b) => {
    if (a == b) return a
    return a > b ? b : a
} 
const menorEntreTres = (a) => (b) => (c) => menor(menor(a)(b))(c)

/* console.log(menorEntreTres(3)(3)(3)) // 3
console.log(menorEntreTres(1)(3)(3)) // 1
console.log(menorEntreTres(3)(3)(1)) // 1
console.log(menorEntreTres(3)(1)(3)) // 1
console.log(menorEntreTres(4)(0)(2)) // 0 */


// q8 - calcule o valor de um número elevado a quarta potencia usando o sub problema de calcular o quadrado

const potencia = (e) => (b) => b ** e
const quartaPotencia = potencia(4)
const quadrado = potencia(2)

const segundaPotencia = (a) => a ** 2
const quarta = (a) => segundaPotencia(segundaPotencia(a))

/* console.log(quartaPotencia(2)) // 16
console.log(quadrado(2)) // 4
console.log(segundaPotencia(2)) // 4
console.log(quarta(2)) // 16 */

// q9 - ou - exclusiva entre dois valores verdade

const ouExclusivo = (a) => (b) => a === b ? false : true

/* console.log(ouExclusivo(true)(true)) // false
console.log(ouExclusivo(false)(false)) // false
console.log(ouExclusivo(true)(false)) // true */


const ouExclusivo2 = (a) => (b) => (a || b) && !(a && b) ? true : false

/* console.log(ouExclusivo2(true)(true)) // false
console.log(ouExclusivo2(false)(false)) // false
console.log(ouExclusivo2(true)(false)) // true */

// q10 - dados primeiro nome e último sobrenome, citação bibliogeráfica

const formatarCitacao = (nome) => (sobrenome) => `${sobrenome}, ${nome}.`
/* console.log(formatarCitacao('Mariana')('Freire'))  */

// q11 - dados tres valores, quantos são maiores que a media entre eles

const media3 = (x) => (y) => (z) => (x + y + z)/3
const maiorQueMedia = (x) => (m) => x > m ? 1 : 0
const media = (x) => (y) => (z) => maiorQueMedia(x)(media3(x)(y)(z)) + maiorQueMedia(y)(media3(x)(y)(z)) + maiorQueMedia(z)(media3(x)(y)(z))

/* console.log(media(2)(2)(2)) // 0
console.log(media(3)(2)(4)) // 1
console.log(media(5)(6)(13)) // 1 */

// q12 - calcular maior e menor valor real das raízes de uma equação do segundo grau

const raiz = (a) => (b) => (c) => {
    const delta = b ** 2 - 4 * a * c
    if (delta >= 0) {
        const x1 = ((b * -1) + Math.sqrt(delta) )/(a * 2)
        const x2 = ((b * -1) - Math.sqrt(delta) )/(a * 2)
        return `As raízes reais são ${x1} e ${x2}`
    }
    return 'Não existem raízes reais'
}

/* console.log(raiz(3)(0)(-27)) // 3 e -3
console.log(raiz(1)(-1)(-12)) // 4  e -3 */


// q13 - um móvel com velocidade constante percorre uma trajetória retilínea, considere t0 = 0, o instante inicial e x0 = 500 a posição inicial, escreva um programa para calcular a velocidade do objeto em um dado instante t e posição x

const velocidade = (t) => (x) => ` Você está à ${(x - 500)/t}m/s.`

/* console.log(velocidade(5)(1000)) // 100 m /s 
 */

// q14 - programa que escreva por extenso um determinado algarismo passado como argumento

const algarismo = (num) => {
    const numeros = ['zero','um','dois','três','quatro','cinco','seis','sete','oito','nove']
    return numeros[num]
}

console.log(algarismo(2))
console.log(algarismo(7))