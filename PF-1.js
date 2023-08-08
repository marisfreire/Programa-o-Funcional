// Programa para calcular a área de uma circunferência dado o valor do raio

function areaDaCircunferencia(raio){
    return (raio ** 2) * 3.14
}

let resultado = areaDaCircunferencia(5)

console.log(resultado)

// Programa para determinar se três valores passados podem representar um triângulo ou não
/* Condição de existência do triângulo 
    Um de seus lados deve ser maior que o valor absoluto da diferença dos outros dois lados e menor que a soma dos outros dois lados*/

function isTriangle(a,b,c){
    if ( a > Math.abs( b - c) && a < b + c ) { return true }
    else { return false } 
}

let trianguloPitagorico = isTriangle(3,4,5)
let aleatorio = isTriangle(6,2,1)

console.log(aleatorio)
console.log(trianguloPitagorico)

// Programa para classsificar um triângulo em Equilátero, Isósceles ou Escaleno a partir dos valores de seus três lados

function classificarTriangulos(a, b, c){
    let condicao = isTriangle(a, b, c)
    if (condicao) {
        if ( a === b && b === c) return 'Equilátero'
        if ( a !=  b && a != c && b != c) return 'Escaleno'
        return 'Isosceles'
    } else {
        return 'Não é triângulo, então não podemos classificar'
    }
}

console.log(classificarTriangulos(4,4,4))
console.log(classificarTriangulos(5,5,3))
console.log(classificarTriangulos(4,6,5))

// Programa para calcular a distância euclidiana entre dois pontos [(x1, y1), (x2, y2)] no plano cartesiano. Utilize a equação geral da reta para calcular a distância quando a reta não for paralela a nenhum dos eixos (abcisssas e ordenadas) e as versões simplificadas quando for paralela.

