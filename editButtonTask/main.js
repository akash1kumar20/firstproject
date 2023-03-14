function printDetails(event){
    event.preventDefault();
    var userName = event.target.name.value;
    var userMail = event.target.mail.value;
    var userPhone = event.target.phone.value;
    
    var userData = {
    userName,
    userMail,
   userPhone
    }
    
    var userData_convert = JSON.stringify(userData);
    
    localStorage.setItem(userData.userMail,userData_convert);
    //we use user mail as a key, because our storage needs different key everytime to save mulitple data
    //give email everytime to store multiple data in local storage
    
    showInput(userData);
    //calling the display function with the object we create

    
}
function showInput(userData){
    var parentEle = document.querySelector('.display');
    var childEle = document.createElement('li');
    childEle.textContent = userData.userName+ '__' + userData.userMail + '__' + userData.userPhone 
   
    childEle2 = document.createElement('button');
    childEle2.textContent = 'Delete'
    childEle2.className = "delete";
    childEle2.onclick = () => {
        localStorage.removeItem(userData.userMail);
        parentEle.removeChild(childEle);
    }

    childEle3 = document.createElement('button');
    childEle3.textContent = 'Edit'
    childEle3.className = "edit";
    childEle3.onclick = () => {
        localStorage.removeItem(userData.userMail);
        parentEle.removeChild(childEle);
        document.getElementById('name').value = userData.userName;
        document.getElementById('email').value = userData.userMail;
        document.getElementById('phone').value = userData.userPhone;
    }
   
    parentEle.appendChild(childEle);
    childEle.appendChild(childEle2);
    childEle.appendChild(childEle3);
//if don't append child then the data will be deleted when we give another value.
}


    





