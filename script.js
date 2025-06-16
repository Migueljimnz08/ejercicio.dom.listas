//Ej 1
document.getElementById('div1').innerHTML;

const parent = document.getElementById('div1');

const ul= document.createElement('ul');
parent.appendChild(ul);

let text1= document.createTextNode('hola');
let text2= document.createTextNode('mundo');
const li1= document.createElement('li');
const li2= document.createElement('li');

li1.appendChild(text1);
li2.appendChild(text2);
ul.appendChild(li1);
ul.appendChild(li2);


/*
const lista= document.createAttribute('lista');

lista.appendChild(ul);
parent.appendChild(lista)
*/

//Ej 2
document.getElementById('div2').innerHTML;

const parent2 = document.getElementById('div2');
const ul2= document.createElement('ul')
parent2.appendChild(ul2);

arr = ["comprar","barrer","alimentar gato","colada"];

for(let i= 0; i< arr.length; i++){
let text = document.createTextNode(arr[i]);
let li = document.createElement('li');
li.appendChild(text);
ul2.appendChild(li);
}
