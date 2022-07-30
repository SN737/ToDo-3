let todoList = []; 
const addMessage = document.querySelector('.input');
const addButton = document.querySelector('.addbtn');





addMessage.addEventListener('input', () => {
    
    if(!addMessage.value.length){
        addButton.disabled = true;
    } else{
        addButton.disabled = false;}
  });


