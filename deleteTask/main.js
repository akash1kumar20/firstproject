function printDetails(event){
    event.preventDefault();
    var forName = document.querySelector('#name').value;
    var forMail = document.querySelector('#email').value;
    var forPhone = document.querySelector('#phone').value;
    
    var userData = JSON.parse(localStorage.getItem('Details of User')) || [];
    userData = {
    userName:forName,
    userEmail:forMail,
    userPhone:forPhone
    }
    
    var userData_convert = JSON.stringify(userData);
    
    localStorage.setItem('Details of User',userData_convert);
    
    var userData_convert_back = JSON.parse(localStorage.getItem('Details of User'));
    
    showInput(userData);
    //calling the display function with the object we create

    
}
function showInput(userData){
    var parentEle = document.querySelector('.display');
    var childEle = document.createElement('li');
    childEle.textContent = userData.userName+ '__' + userData.userEmail + '__' + userData.userPhone 
   
    childEle2 = document.createElement('button');
    childEle2.textContent = 'Delete'
    childEle2.className = "delete";
   
    parentEle.appendChild(childEle);
    childEle.appendChild(childEle2);
//if don't append child then the data will be deleted when we give another value.
}
var forForm = document.getElementById('display');
forForm.addEventListener('click', removeItem);

function removeItem(e){
    if(e.target.classList.contains('delete')){
            var li = e.target.parentElement;
           forForm.removeChild(li); 
       localStorage.removeItem('Details of User');
    }
    }





