// // 1 - Métodos
// const animal = {
//     nome: "Scooby",
//     latir: function () {
//         console.log("au au au");
//     }
// }

// console.log(animal.nome);

// animal.latir();

// // 2 - Aprofundando em métodos
// const pessoa = {
//     nome: "Luiz",

//     getNome: function () {
//         return this.nome
//     },

//     setNome: function (novoNome) {
//         this.nome = novoNome;
//     },
// }

// console.log(pessoa.nome);

// console.log(pessoa.getNome());

// pessoa.setNome("Davi");

// console.log(pessoa.getNome());

// // 3 - Prototype
// const text = "ablabla"

// console.log(Object.getPrototypeOf(text));

// // 4 - Mais sobre prototype
// const myObject = {
//     a: "b"
// }

// console.log(Object.getPrototypeOf(myObject));

// console.log(Object.getPrototypeOf(myObject) === Object.prototype);

// const mySecondObject = Object.create(myObject)

// console.log(mySecondObject);

// console.log(mySecondObject.a);

// console.log(Object.getPrototypeOf(mySecondObject) === myObject);

// // 5 - Classes básicas
// const dog = {
//     raca: null,
//     patas: 4
// }

// const pastorAlemao = Object.create(dog)

// pastorAlemao.raca = "Pastor Alemão"

// console.log(pastorAlemao);

// console.log(pastorAlemao.patas);

// const bulldog = Object.create(dog)

// bulldog.raca = "Bulldog"

// console.log(bulldog);

// // 6 - Função como classe - função construtora
// function criarDog(nome, raca) {
//     const dog = Object.create({})

//     dog.nome = nome
//     dog.raca = raca

//     return dog
// }

// const bob = criarDog("Bob", "Vira lata")

// console.log(bob);

// const jack = criarDog("Jack", "Golden")

// console.log(jack);

// // 7 - Função construtora
// function Cachorro(nome, raca) {
//     this.nome = nome
//     this.raca = raca
// }

// const husky = new Cachorro("Luke", "Husky")

// console.log(husky);

// // 8 - Métodos em função construtora
// Cachorro.prototype.uivar = function () {
//     console.log("Auuuuuuuuuuuuuuul");
// }

// console.log(Cachorro.prototype);

// husky.uivar()

// // 9 - Classes ES6
// class CachorroClasse {
//     constructor(nome, raca) {
//         this.nome = nome
//         this.raca = raca
//     }
// }

// const jeff = new CachorroClasse("Jeff", "Labrador")

// console.log(jeff);
// console.log(Object.getPrototypeOf(jeff));

// // 10 - Mais sobre classes
// class Truck{
//     constructor(marca, eixos, cor){
//         this.marca = marca
//         this.eixos = eixos
//         this.cor = cor
//     }

//     descreverTruck(){
//         console.log(`Este caminhão é da ${this.marca}, tem ${this.eixos} eixos e é da cor ${this.cor}`);
//     }
// }

// const scania = new Truck("Scania", 8, "branca")

// console.log(scania);

// scania.descreverTruck()

// Truck.motor = 4

// const c2 = new Truck("VW", 6, "Vermelho")

// console.log(c2);

// console.log(c2.motor);

// Truck.prototype.motor = 4.0

// const c3 = new Truck("Volvo", 12, "Preto")

// console.log(c3.motor);

// // 11 - Override
// class Human{
//     constructor(nome, idade){
//         this.nome=nome
//         this.idade=idade
//     }
// }

// const luiz = new Human("Luiz", 18)

// console.log(luiz);

// Human.prototype.idade = "Não definida"

// console.log(luiz.idade);

// console.log(Human.prototype.idade);

// // 12 - Symbols em classes
// class Aviao {
//     constructor(marca, turbina) {
//         this.marca = marca
//         this.turbina = turbina
//     }
// }

// const asas = Symbol()

// const pilotos = Symbol()

// Aviao.prototype[asas] = 2

// Aviao.prototype[pilotos] = 3

// const boeing = new Aviao("Boeing", 10)

// console.log(boeing);

// console.log(boeing[asas]);

// console.log(boeing[pilotos]);

// 13 - Getters e Setters
class Post {
    constructor(titulo, descricao, tags) {
        this.titulo = titulo
        this.descricao = descricao
        this.tags = tags
    }

    get exibirTitulo(){
        return `Você está lendo: ${this.titulo}`
    }

    set adicionarTags(tags){
        const tagsArray = tags.split(", ")
        this.tags = tagsArray
    }
}

const myPost = new Post("Algum post", "Post sobre programação")

console.log(myPost);

console.log(myPost.exibirTitulo);

myPost.adicionarTags = "Programação, JavaScript, Html"

console.log(myPost);

// 14 - Herança
class Mamifero {
    constructor(patas) {
        this.patas = patas
    }
}

class Lobo extends Mamifero {
    constructor(patas, nome) {
        super(patas, patas)
        this.nome = nome
    }
}

const shark = new Lobo(4, "Shark")

console.log(shark);

// 15 - Instanceof
console.log(shark instanceof Lobo);

console.log(Lobo instanceof Mamifero);

console.log(new Lobo(4, "Teste") instanceof Mamifero);

console.log(new Post("a", "b") instanceof Mamifero);