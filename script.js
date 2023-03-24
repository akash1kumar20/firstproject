function printDetails(event){
    event.preventDefault();
    var userAmount = event.target.amount.value;
    var userDescription = event.target.description.value;
    var userCategory = event.target.category.value;
    
    var userData = {
        userAmount,
        userDescription,
        userCategory
    }
    
    console.log(userData);
    var userData_convert = JSON.stringify(userData);
    
    localStorage.setItem(userData.userDescription,userData_convert);
   
    
    showInput(userData);
   

    
}

function showInput(userData){
    var parentEle = document.querySelector('.display');
    var childEle = document.createElement('li');
    childEle.textContent = userData.userAmount+ '__' + userData.userDescription 
   
    childEle2 = document.createElement('button');
    childEle2.textContent = 'Delete'
    childEle2.className = "delete";
    childEle2.onclick = () => {
        localStorage.removeItem(userData.userDescription);
        parentEle.removeChild(childEle);
    }

    childEle3 = document.createElement('button');
    childEle3.textContent = 'Edit'
    childEle3.className = "edit";
    childEle3.onclick = () => {
        localStorage.removeItem(userData.userDescription);
        parentEle.removeChild(childEle);
        document.getElementById('expenseAmount').value = userData.userAmount;
        document.getElementById('expenseDescription').value = userData.userDescription;
        
    }
   
    parentEle.appendChild(childEle);
    childEle.appendChild(childEle2);
    childEle.appendChild(childEle3);

}



