// 1 - Movendo-se pelo DOM
console.log(document.body);

console.log(document.body.childNodes);

console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes);

console.log(document.body.childNodes[1].childNodes[1].textContent);

// 2 - Encontrando elementos por tag
const listItems = document.getElementsByTagName("li")

console.log(listItems);

// 3 - Encontrando elementos por Id
const title = document.getElementById("title")

console.log(title);

// 4 - Encontrando elementos por classe
const products = document.getElementsByClassName("product")

console.log(products);

// 5 - Encontrando elementos por CSS
const productsQuery = document.querySelectorAll(".product")

console.log(productsQuery);

const mainContainer = document.querySelector("#main-container")

console.log(mainContainer);

// 6 - insertBefore (criar um elemento via DOM)
const p = document.createElement("p")

const header = title.parentElement

header.insertBefore(p, title)

// 7 - appendChild
const navLinks = document.querySelector("nav ul")

const li = document.createElement("li")

navLinks.appendChild(li)

// 8 - replaceChild
const h2 = document.createElement("h2")

h2.textContent = "Meu novo título"

header.replaceChild(h2, title)

// 9 - createTextNode
const myText = document.createTextNode("Agora mais um título")

console.log(myText);

const h3 = document.createElement("h3")

h3.appendChild(myText)

console.log(h3);

mainContainer.appendChild(h3)

// 10 - Trabalahando com atributos
const firstLink = navLinks.querySelector("a")

console.log(firstLink);

firstLink.setAttribute("href", "https://www.google.com")

console.log(firstLink.getAttribute("href"));

firstLink.setAttribute("target", "blank")

// 11 - Altura e largura dos elementos
const footer = document.querySelector("footer")

console.log(footer.offsetHeight);

console.log(footer.offsetWidth);

console.log(footer.clientHeight);

console.log(footer.clientWidth);

// 12 - Posição do elemento
const product1 = products[0]

console.log(product1.getBoundingClientRect());

// 13 - CSS no Js
mainContainer.style.color = "red"
mainContainer.style.backgroundColor = "#ddd"
mainContainer.style.paddingBottom = "20px"

// 14 - Alterando estilos de vários elementos
for(const li of listItems){
    li.style.backgroundColor = "red"
    li.style.marginBottom = "10px"
}