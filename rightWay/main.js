
function printDetails(event){

var val1 = document.getElementById('name').value;
var val2 = document.getElementById('email').value;

var obj1 = {
    userName:val1,
    userEmail:val2
}

let obj1_serialized = JSON.stringify(obj1);
//to represent it as a string

localStorage.setItem('details',obj1_serialized);

var obj1_deserialized = JSON.parse(localStorage.getItem('details'));
//to convert back into the object from the string


}   