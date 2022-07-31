let todoArray = [];
let key = 'Todo-M4';
let id = 0;
const addMessage = document.querySelector('.input');
const addButton = document.querySelector('.addbtn');
const wrapper = document.querySelector('.wrapper');

let  todo = document.querySelector('.todo');


checkLocalstorage();


function markAsDone(doneBtn, tdItem){
    doneBtn.addEventListener('click', ()=> {
        tdItem.classList.toggle('done');
    })
}

addMessage.addEventListener('input', () => {
    if(!addMessage.value.length){
        addButton.disabled = true;
    } else{
        addButton.disabled = false;}
       
});


addButton.addEventListener('click', (e) => {
    e.preventDefault();
    createToDoItem(addMessage.value);

     //alert ('удаляем тодо');
    todo.remove();
    checkLocalstorage();
    
});





function checkLocalstorage() {
    ////alert ('рисуем пустую тудуху')
    todo = document.createElement('ul');
    todo.classList.add('todo');
    wrapper.append(todo);
    
    
    let localStorageData = localStorage.getItem(key);
        if (localStorageData == null) {
            //alert ('данных нет идём сюда')
            todoArray = [];
            
            } else {
                //alert ('данные есть идём сюда')
                let todoArray =  JSON.parse(localStorage.getItem(key));
                console.log(todoArray);
                
                
                
                for (const obj of todoArray) {

                    //alert (obj.toDoName);
                let toDoName = obj.name;
                let idFromlocalstorage = obj.id;
                //alert ('идём рисовать тудуху');
                const todoItem = displayMessages(toDoName, idFromlocalstorage);
                markAsDone(todoItem.doneBtn, todoItem.tdItem);
                }
                
            }


}

function createToDoItem(name, idFromlocalstorage) {

    // switch(idFromlocalstorage) {
    //     case true: 
    //     id = idFromlocalstorage;
    //     break;
    //     case false: 
    //     id = id + 1;
    //     break;}


    const createItem = (arr) => {
        const itemObj = {};
        itemObj.name = addMessage.value;
        itemObj.id = id;
        //itemObj.done = completeTodoItem;
        itemObj.done = false;

        arr.push(itemObj);
        

    };
    createItem(todoArray);
    localStorage.setItem(key, JSON.stringify(todoArray));
    
    

    addMessage.value ='';
   
   
  };

  function displayMessages(name, idFromlocalstorage){
    
    
    //alert ('пришли - рисуем')

     

    

    const tdItem = document.createElement('li');
    const btnWrapper = document.createElement('div');
    const doneBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    doneBtn.textContent = 'готово';
    deleteBtn.textContent = 'удалить';
    tdItem.textContent = name;
    btnWrapper.append(doneBtn, deleteBtn);
    deleteBtn.classList.add('btndel');
    doneBtn.classList.add('btndel');

    tdItem.append(btnWrapper);
    todo.append(tdItem);

    

    return {
        tdItem,
        doneBtn,
        deleteBtn, 
        btnWrapper
    };

  }


