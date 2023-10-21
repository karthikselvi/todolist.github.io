const taskinput=document.getElementById("taskinput");
const addtask=document.getElementById("addtask");
const tasklist=document.getElementById("tasklist");

addtask.addEventListener("click",function(){
    const taskvalue=taskinput.value.trim();
    if(taskvalue.length){
        console.log(taskvalue)
        const li=document.createElement("li");
        const checkbox=document.createElement("input");
        const textnode=document.createTextNode(`${taskvalue}`);
        const delbtn=document.createElement("button");
        
       
        checkbox.type="checkbox";
        delbtn.innerText="delete";
        
        li.appendChild(checkbox);
        li.appendChild(textnode);
        li.appendChild(delbtn);
        tasklist.appendChild(li);

        checkbox.addEventListener("change",function(){
            if(this.checked){
                li.classList.add("completed");
                
            }
            else{
                li.classList.remove("completed");
            }
        })
       
        delbtn.addEventListener("click",function(){
            tasklist.removeChild(li);
        });

        taskinput.value="";
    }
});