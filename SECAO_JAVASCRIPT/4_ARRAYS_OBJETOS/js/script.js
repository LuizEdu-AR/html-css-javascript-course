// // 1 - Arrays
// const lista = [1, 2, 3, 4, 5]
// console.log(lista);
// console.log(typeof lista);

// const items = ["Luiz", false, 18, ["Ti"]]
// console.log(items);

// // 2 - Mais sobre arrays
// const arr = ["a", "b", "c"]
// console.log(arr[0]);
// console.log(arr[2]);

// // 3 - Propriedades
// const numbers = [5, 3, 4]
// console.log(numbers.length);
// console.log(numbers[`length`]);

// const myName = "Luiz"
// console.log(myName.length);

// //  4 - Métodos
// const otherNumbers = [1, 2, 3]
// const allNumber = numbers.concat(otherNumbers)

// console.log(allNumber);

// const text = "algum texto"
// console.log(text.toUpperCase());
// console.log(typeof text.toUpperCase);
// console.log(text.indexOf("m"));

// // 5 - Objetos
// const person = {
//     name: "Luiz",
//     age: 18,
//     job: "Programador"
// }
// console.log(person);
// console.log(person.name);
// console.log(person.name.length);
// console.log(typeof person);

// // 6 - Criando e deletando propriedades
// const car = {
//     engine: 1.6,
//     brand: "Volkswagen",
//     model: "Voyage",
//     km: 150000
// }
// console.log(car);

// car.doors = 4
// console.log(car);

// delete car.km
// console.log(car);

// // 7 - Mais sobre objetos
// const obj = {
//     a: "teste",
//     b: true,
// }

// console.log(obj instanceof Object);

// const obj2={
//     c:[]
// }

// Object.assign(obj2, obj)

// console.log(obj2);

// // 8 - Conhecendo melhor os objetos
// console.log(Object.keys(obj));
// console.log(Object.keys(obj2));

// console.log(Object.entries(obj));
// console.log(Object.entries(obj2));

// // 9 - Mutação(mutability)
// const a = {
//     name: "Luiz"
// }

// const b = a
// console.log(a);
// console.log(b);

// console.log(a===b);

// a.age = 18
// console.log(a);
// console.log(b);

// // 10 - Loope em array
// const users = ["Matheus", "Luiz", "Davi"]

// for(let i = 0; i < users.length; i++){
//     console.log(`Listando o usuário: ${users[i]}`);
// }

// // 11 - Push e pop
// const users = ["Luiz", "Davi"]
// users.push("Pedro")
// console.log(users);
// users.pop()
// console.log(users);

// const itemRemovido = users.pop()
// console.log(itemRemovido);
// console.log(users);

// // 12 - Shift e unshift
// const letters = ["a", "b", "c"]
// const letter = letters.shift()

// console.log(letter);
// console.log(letters);

// letters.unshift("p", "q", "r")
// letters.unshift("z")
// console.log(letters);

// // 13 - indexOf e lastIndexOf
// const array = ["a", "b", "c", "d", "c"]
// console.log(array.indexOf("b"));
// console.log(array.lastIndexOf("c"));

// console.log(array[2]);
// console.log(array[array.lastIndexOf("c")]);

// // 14 - Slice
// const testeSlice = ["a", "b", "c", "d", "e", "f"]
// const subArray = testeSlice.slice(2, 4)

// console.log(subArray);
// console.log(testeSlice);

// const subArray2 = testeSlice.slice(2, 4 + 1)
// console.log(subArray2);

// const subArray3 = testeSlice.slice(10, 20)
// console.log(subArray3);

// const subArray4 = testeSlice.slice(2)
// console.log(subArray4);

// // 15 - ForEach
// const nums  = [1, 2, 3, 4, 5]

// nums.forEach((n) =>{
//     console.log(`O número é ${n}`);
// })

// const posts = [
//     { title: "Primeiro post", category: "PHP" },
//     { title: "Segundo post", category: "JavaScript" },
//     { title: "Terceiro post", category: "Python" },
//   ];

//   posts.forEach((post) => {
//     console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`);
//   });

// // 16 - includes
// const brands = ["BMW", "VW", "Fiat"];

// console.log(brands.includes("Fiat"));

// console.log(brands.includes("Kia"));

// if (brands.includes("BMW")) {
//   console.log("Há carros da marca BMW!");
// }

// // 17 - Reverse
// const reverseTest = [1, 2, 3, 4, 5]

// reverseTest.reverse()
// console.log(reverseTest);

// // 18 - Trim
// const trimTeste = "  Testando \n  "
// console.log(trimTeste)
// console.log(trimTeste.trim())
// console.log(trimTeste.length)
// console.log(trimTeste.trim().length)

// // 19 - padStart
// const testePadStart = "1"

// const newNumber = testePadStart.padStart(4, "0")

// console.log(testePadStart);
// console.log(newNumber);

// const testePadEnd = newNumber.padEnd(10, "0")
// console.log(testePadEnd);

// // 20 - Split
// const frase = "O rato roeu a roupa do rei de Roma";

// const arrayDaFrase = frase.split(" ");

// console.log(arrayDaFrase);


// // 21 - Join
// const fraseDenovo = arrayDaFrase.join(" ")
// console.log(fraseDenovo);

// const itensParaComprar = ["Mouse", "Teclado", "Monitor"];

// const fraseDeCompra = `Precisamos comprar ${itensParaComprar.join(", ")}.`;

// console.log(fraseDeCompra);

// // 22 - Repeat
// const palavra = "Luiz é lindo. "
// console.log(palavra.repeat(5));

// // 23 - Rest operator / Rest parameters
// const somaInfinita = (...args) => {
//     let total = 0;

//     for (let i = 0; i < args.length; i++) {
//       total += args[i];
//     }

//     return total;
//   };

//   console.log(somaInfinita(1, 5, 10));

//   console.log(somaInfinita(1, 2, 3, 4, 5, 6, 7, 7, 8, 9));

// // 24 - For...of
// const somaInfinita2 = (...args) =>{
//     let total = 0

//     for(num of args){
//         total+=num
//     }

//     return total;
// }

// console.log(somaInfinita2(1, 2, 4));
// console.log(somaInfinita2(18, 3, 24, 53, 5));

// // 25 - Destructuring em objetos
// const usersDetails = {
//     firstName: "Luiz",
//     lastName: "Eduardo",
//     job: "Programador"
// }

// const {firstName, lastName, job} = usersDetails

// console.log(firstName, lastName, job);

// // Renomear variáveis
// const {firstName: primeiroNome} = usersDetails
// console.log(primeiroNome);

// // 26 - Destructuring em arrays
// const myList = ["Avião", "Carro"]
// const [veiculoA, veiculoB, veiculoC] = myList
// console.log(veiculoB, veiculoA, veiculoC);

// // 27 - JSON
// const myJson = 
//     '{"name": "Luiz","age": 31,"skills":["Html", "CSS", "JavaScript"]}'

// // 28 - JSON para objeto e objeto para JSON
// const myObject = JSON.parse(myJson)

// console.log(myObject);
// console.log(myObject.name);
// console.log(typeof myObject);

// // JSON inválido
// const badJson = '{"name":Jocilda,"age": 31}'
// const myBadObject = JSON.parse(badJson)
// console.log(myBadObject);

// myObject.isOpenToWork = true
// console.log(myObject);

// const myNewJson = JSON.stringify(myObject)
// console.log(myNewJson);
// console.log(typeof myNewJson);