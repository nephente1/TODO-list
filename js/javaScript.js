document.addEventListener('DOMContentLoaded', function() {

const task  = document.getElementById('task');
const addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', () => {
    let newLi = document.createElement('li');

    let edit = document.createElement('button');
    edit.innerHTML = '<i class="fas fa-edit"></i>';

    let complete = document.createElement('button');
    complete.innerHTML = '<i class="fas fa-check-circle"></i>';
    let minus = document.createElement('button');
    minus.innerHTML = '<i class="fas fa-minus-circle"></i>';

    document.getElementById('todoList').appendChild(newLi);
    newLi.innerText = `${task.value}`;
    newLi.appendChild(complete);
    newLi.appendChild(minus);
    newLi.appendChild(edit);
    task.value = "";

    minus.addEventListener('click',()=>{
        document.getElementById('todoList').removeChild(newLi);
    })

    edit.addEventListener('click',()=>{
            if (newLi.contentEditable == "true") {
                newLi.contentEditable = "false";
                edit.innerHTML = '<i class="fas fa-edit"></i>';       
            }
            else {
                newLi.contentEditable = "true";
                edit.innerHTML = '<i class="fas fa-check-square"></i>';
            }
        
    });

    complete.addEventListener('click', () => {
        
        let finishedTask = newLi.innerText;
        newLi.classList.toggle('checked');
        
       
        if(newLi.className ==='checked') {
            let finishedLi = document.createElement('li');
            document.getElementById('finished').appendChild(finishedLi);
            finishedLi.innerHTML = `${finishedTask}`;
  
            finishedLi.className = 'checked';
            
            let przywroc = document.createElement('button');
            przywroc.innerHTML = '<i class="fas fa-arrow-circle-up"></i>';
            finishedLi.appendChild(przywroc);
            let usun = document.createElement('button');
            usun.innerHTML = '<i class="fas fa-minus-circle"></i>';
            finishedLi.appendChild(usun);

            usun.addEventListener('click',()=>{
                document.getElementById('finished').removeChild(finishedLi);
            })

            document.getElementById('todoList').removeChild(newLi);
            
            przywroc.addEventListener('click', ()=>{
                document.getElementById('todoList').appendChild(newLi);
                document.getElementById('finished').removeChild(finishedLi);
                newLi.classList.remove('checked');
            })

        }

    })
});



});















