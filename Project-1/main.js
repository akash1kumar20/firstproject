console.log(document.title);
var change1 = document.querySelector('title');
change1.textContent = 'Title changed'
console.log(document.title);
var change2 = document.querySelector('body');
change2.style.backgroundColor = "pink";
var change3 = document.getElementById('header-title');
console.log(typeof change3);
change3.style.color='yellowgreen'
change3.style.border='solid 5px #000'

var change4 = document.querySelectorAll('.title');
change4[0].style.fontWeight = 'bold';
change4[0].style.color = 'green'