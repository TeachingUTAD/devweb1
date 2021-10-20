//Inicializacion de la lista de tareas
const tareas = [
    { titulo: 'Practica 1 ciber'},
    { titulo: 'Estudiar examen primer parcial'},
    { titulo: 'Practica gestion de proyectos'},
    { titulo: 'Arreglando script'}
];

var todoListElement = document.getElementById('todo_list');

for (let i = 0; i < tareas.length; i +=1) {
    let tarea = tareas[i];
    createNewTask(todoListElement, tarea.titulo);
}

function createNewTask(lista, titulo_tarea){
    let liElement = document.createElement('li');
    liElement.textContent = titulo_tarea;
    lista.appendChild(liElement);
}

var botonCrear = document.getElementById('crear_tarea');
botonCrear.addEventListener('click', function(event){
    let titulo = document.getElementById('titulo');
    console.log(titulo);
    if (titulo.value !== ''){
        //llamar metodo para añadir el nodo a la lista
        createNewTask(todoListElement, titulo.value);
    }else
        alert("La tarea no puede estar vacia");

}
);

var inputElement = document.getElementById('titulo');
inputElement.addEventListener('input', function(event){
    let varEntrada = event.target.value;
    let regex = /^[A-Z]/;

    if(regex.test(varEntrada) || varEntrada === '')
        this.style.backgroundColor = 'lightgreen';
    else
        this.style.backgroundColor = 'tomato';

});

