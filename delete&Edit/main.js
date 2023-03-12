var forForm  = document.querySelector('#addForm');
// console.log(forForm);
var forList = document.querySelector('#items');
// console.log(forList);
forList.createElement('BUTTON');

forList.addEventListener('click', removeItem);
forForm.addEventListener('submit', addItem);
function addItem(e){
    e.preventDefault();
    //using this because we want that our submit section will go back on the original mode, even user submit value.
    
    var newItem = document.getElementById('item').value;
//for getting the value

var li = document.createElement('li');
li.className = 'list-group-item';
//create new item and also give the same class which other item have

li.appendChild(document.createTextNode(newItem));
//we want that new element that we added, its value to be show in item list

var buttonDel = document.createElement('button');
buttonDel.className = "btn btn-danger btn-sm float-right delete";
buttonDel.appendChild(document.createTextNode('X'));
li.appendChild(buttonDel);
//add delete button

forList.appendChild(li);
//li added in item list

}

//Remove Item Function:
function removeItem(e){
if(e.target.classList.contains('delete')){
    if(confirm('Do you really want to delete this item?')){
        var li = e.target.parentElement;
       forList.removeChild(li); 
    }
}
}