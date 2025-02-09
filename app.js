let inputs = document.getElementById('inputs');
let list = document.getElementById('list');

function AddTask(){
    if(inputs.value === ''){
        alert("you must write somting!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputs.value;
        list.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputs.value = '';
    save();
}

list.addEventListener('click',function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("cheked");
        save();
    }
   else if(e.target.tagName === "SPAN"){

      e.target.parentElement.remove();
      save();
   }
},false);

function save(){
    localStorage.setItem("data",list.innerHTML)
}
function show(){
    list.innerHTML = localStorage.getItem("data");
}
show();