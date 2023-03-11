// console.log('HEllo');
var tag = document.getElementsByTagName('li');
// console.log(tag);
tag[4].style.backgroundColor = 'red';
tag[4].style.fontWeight = 'bold';
tag[3].style.fontWeight = 'bold'

var forClass = document.getElementsByClassName('list-group-item');
// console.log(forClass);
for(var i=0; i<forClass.length; i++){
    forClass[i].style.backgroundColor = 'grey';
}