var change1 = document.getElementsByClassName('list-group-item');
console.log(change1);  
// change1[1].style.fontWeight = 'bold';
change1[2].style.backgroundColor = 'green';

for(var i=0; i<change1.length; i++){
    change1[i].style.fontWeight = 'bold';
}