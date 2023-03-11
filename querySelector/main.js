var querySelector = document.querySelector('.list-group-item');
//class in query selector is lead by dot
//by default it select only the first element matches with that class name
console.log(querySelector);
var querySelector2 = document.querySelector('.list-group-item:nth-child(2)');
querySelector2.style.backgroundColor = 'green'

var querySelector3 = document.querySelector('.list-group-item:nth-child(3)');
// querySelector3.style.display = 'none'
//above code is to hide the item-3 from the webpage

var selectorAll = document.querySelectorAll('.list-group-item');
selectorAll[1].style.color = 'red';

var odd = document.querySelectorAll('.list-group-item:nth-child(odd)');
//to select even element just replace odd by even
for(var i=0; i<odd.length; i++){
    odd[i].style.backgroundColor = 'green'; 
}