localStorage.setItem('name', 'john');
//to add item in local storage
console.log(localStorage.getItem('na'));
//to find the item
localStorage.removeItem('na');
localStorage.removeItem('name');
//to delete the item

//local storage and session storage are same, use sessionStorage instead localStorage to save data on session storage.

document.cookie = 'fName=Akash; expires=' + new Date(9999, 0, 1).toUTCString()
document.cookie = 'lName=Kumar; expires=' + new Date(9999, 0, 1).toUTCString()
//to store the data in the cookie and to set the expiry date.


function printDetails(event){
localStorage.setItem('userName',event.target.name.value);
localStorage.setItem('userEmail',event.target.mail.value);

}