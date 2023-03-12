// Traversing the Node

//PARENT ELEMENT
var parent = document.querySelector('#items');
//to select id use # before name
parent.parentNode.style.backgroundColor = 'skyblue';
//<div id="main" class="card card-body"> this is parent because the item we select is under this id.
// <div class="container"> is the grand parent of the id which we select.

//FIRST AND LAST CHILDREN ELEMENT
console.log(parent.children);
//always use children instead of child to avoid white space or line break as the text in the console
 parent.firstElementChild.textContent = 'I am first child element';
 parent.lastElementChild.textContent = 'I am last child element';

 //FIRST AND LAST CHILD ElEMENT
console.log(parent.firstChild,parent.lastChild);

//SIBLINGS ELEMENT
console.log(parent.nextElementSibling);
console.log(parent.previousElementSibling);
parent.previousElementSibling.style.backgroundColor = 'tomato'

//SIBLINGS
console.log(parent.nextSibling);
console.log(parent.previousSibling);

//CREATE ELEMENT
var element = document.createElement('div');


//ADDING ATTRIBUTES
element.className = 'class1';
element.id = 'Tag';
element.setAttribute('title','Div here');

//TEXTNODE
var elementText = document.createTextNode('HEllo');


//APPEND CHILD
element.appendChild(elementText);
console.log(element);

//ADDING IN HEADER
var container = document.querySelector('header .container');
//here we defiene that we want class 'container' of 'header' section
var head = document.querySelector('header h1');

container.insertBefore(elementText, head);

//ADDING IN LIST
var list = document.querySelector('#items');
var abc = document.querySelector('#items .list-group-item');

var elementText1 = document.createTextNode('HEllo');
list.insertBefore(elementText1,abc)
// console.log(list);

