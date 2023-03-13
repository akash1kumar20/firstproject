var forForm  = document.querySelector('#addForm');
// console.log(forForm);
var forList = document.querySelector('#items');
// console.log(forList);
var forFilter = document.querySelector('#filter');

forList.addEventListener('click', removeItem);
forForm.addEventListener('submit', addItem);
forFilter.addEventListener('keyup', filterItems);

function addItem(e){
    e.preventDefault();
    //using this because we want that our submit section will go back on the original mode, even user submit value.
    
    var newItem = document.getElementById('item').value;
    var newItem1 = document.getElementById('item1').value;
//for getting the value

var li = document.createElement('li');
li.className = 'list-group-item';

//create new item and also give the same class which other item have

li.appendChild(document.createTextNode(newItem));
li.appendChild(document.createTextNode(newItem1));
//we want that new element that we added, its value to be show in item list

var buttonDel = document.createElement('button');
buttonDel.className = "btn btn-danger btn-sm float-right delete";
buttonDel.appendChild(document.createTextNode('X'));
li.appendChild(buttonDel);
//add delete button

var buttonEdit = document.createElement('button');
buttonEdit.className = "btn btn-dark btn-sm mr-1 float-right edit";
buttonEdit.appendChild(document.createTextNode('Edit'));
li.appendChild(buttonEdit);
//add edit button

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

function filterItems(e){
    var text = e.target.value.toLowerCase();
    //to make sure that result don't get unmatched because of the upper/lower case
   
    var items = forList.getElementsByTagName('li');
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        var descrpitionText = item.childNodes[1].textContent;
        //created a array and getting the values from items
        if(itemName.toLocaleLowerCase().indexOf(text) != -1 || descrpitionText.toLocaleLowerCase().indexOf(text) != -1){
            //showing first child and second child as the descrpition
            item.style.display = 'block'
            //in case search value matches the item then we show it
        }
        else{
            item.style.display = 'none';
        }
    })


}



