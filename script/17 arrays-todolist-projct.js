 const todoNames=[{name: "make dinner", date:"2026-03-12"}];
 let todoHtml='';
 function randertodolist(){
    for(let i= todoNames.length-1; i >= 0; i--){
       let todoobject=todoNames[i];
       const name= todoobject.name;
       const date= todoobject.date;
       let html=`<div>
        <p class="name-display">${name}</p>
       <button class="date-display">
        ${date}
       </button>
       <button class="delet js-delet-button">Delet</button>
       </div>`;
       
       todoHtml += html;

    }
    document.querySelector('.js-todo-name-list')
       .innerHTML=todoHtml;
    todoHtml='';
    document.querySelectorAll('.js-delet-button').forEach((deletButton, index)=>{
         deletButton.addEventListener('click',()=> {
           todoNames.splice(index,1);
           randertodolist();
    });
    });
    
 }
 randertodolist();
document.querySelector('.js-add-button').addEventListener('click',()=> todolist());


 function todolist(){
  const inputElement=document.querySelector('.js-input-name');
  const inputDateElement=document.querySelector('.js-input-date');
  const name=inputElement.value;
  const date=inputDateElement.value;
  todoNames.push({name: name, date: date});
  inputElement.value='';
  randertodolist();
   
 }
 function  handleEvent(event){
  if(event.key==='Enter'){
    todolist();
  }
 }