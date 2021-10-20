const tasks = [
    { title: 'Hacer la colada' },
    { title: 'Preparar la cena' },
    { title: 'Tirar la basura' },
];

const todoListElement = $("#todo_list");

for (var i = 0; i < tasks.length; i += 1) {
    var task = tasks[i];
    createTaskElement(todoListElement, task.title);
}

function createTaskElement(elementToAppend, title) {
    var li = document.createElement('li');
    li.textContent = title;
    elementToAppend.append(li);
}

$("#create_button").click(function(){
    let varEntrada = $("#task_title").val();
    if (varEntrada !== '') {
        createTaskElement(todoListElement, varEntrada);
    } else {
        alert('No puedes guardar una lista vacia.')
    }

    $("#task_title").val('');
});

$("#task_title").on({
    keypress: function(event){
        let inputValue = event.target.value;
        let regex = /^[A-Z]/;
    
        if(regex.test(inputValue) || inputValue === '') {
            $(this).css("backgroundColor","lightgreen")
        } else {
            $(this).css("backgroundColor","tomato")
        }
    },
    keydown: function(event){
        let inputValue = event.target.value;
        let regex = /^[A-Z]/;
    
        if(regex.test(inputValue) || inputValue === '') {
            $(this).css("backgroundColor","lightgreen")
        } else {
            $(this).css("backgroundColor","tomato")
        }
    },
    keyup: function(event){
        let inputValue = event.target.value;
        let regex = /^[A-Z]/;
    
        if(regex.test(inputValue) || inputValue === '') {
            $(this).css("backgroundColor","lightgreen")
        } else {
            $(this).css("backgroundColor","tomato")
        }
    }
});