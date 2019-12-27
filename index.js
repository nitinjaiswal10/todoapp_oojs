window.onload = function(){

    const addButton = document.getElementById("add-button");
    const addInput = document.getElementById("add-input");
    const listHead = document.getElementById("list");

    const finishTask = (e) => {
        if(e.target.checked){
            e.target.setAttribute('class','strike');
        }else{
            e.target.removeAttribute('class');
        }
    };
    const addItem = (e) => {
        let inputval = addInput.value;

        if(!inputval){
            return;
        }

        const template = document.getElementById("template");
        const clone = document.importNode(template.content,true);
        clone.querySelector('span').textContent = inputval;
        clone.querySelector('input').addEventListener('click', finishTask);
        listHead.appendChild(clone);
        addInput.value = '';

    }
    addButton.addEventListener("click", addItem)
};