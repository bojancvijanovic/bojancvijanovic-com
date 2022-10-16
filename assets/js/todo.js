const toDoForm = document.querySelector(".todo-form");
const toDoInput = document.querySelector(".todo-input");
const toDoItemsList = document.querySelector(".todo-items");

let todos = [];

toDoForm.addEventListener('submit', function (event) {
    event.preventDefault();
    addTodo(toDoInput.value);
});

const addTodo = item => {
    if (item !== '') {
        const todo = {
            id: Date.now(),
            name: item,
            completed: false
        };
        todos.push(todo);
        addToLocalStorage(todos);
        toDoInput.value = '';
    }
}

const renderToDos = todosArray => {
    toDoItemsList.innerHTML = "";

    todosArray.map(arrElem => {
        const checked = arrElem.completed ? 'checked' : null;
        const li = document.createElement("li");

        li.setAttribute("class", "item");
        li.setAttribute("data-key", arrElem.id)
        if (arrElem.completed === true) {
            li.classList.add("checked");
        }
        li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-start')
        li.innerHTML = `
    <input type="checkbox" class="checkbox form-check-input" ${checked}>
    <span>${arrElem.name}</span>
    <button class="delete-button alert alert-warning">x</button>
    `
        toDoItemsList.append(li);


    });


}

const addToLocalStorage = todosArray => {
    localStorage.setItem('todos', JSON.stringify(todosArray));
    renderToDos(todosArray);
}

const getFromLocalStorage = () => {
    const reference = localStorage.getItem('todos');
    if (reference) {
        todos = JSON.parse(reference);
        renderToDos(todos);
    }
}

const toggle = id => {
    todos.map(arrElem => {
        if (arrElem.id == id) {
            arrElem.completed = !arrElem.completed;
        }

    })
    addToLocalStorage(todos);
}


const deleteTodo = id => {
    todos = todos.filter(function (arrElem) {
        return arrElem.id != id;
    })
    addToLocalStorage(todos);
}

getFromLocalStorage();


toDoItemsList.addEventListener('click', function (event) {
    if (event.target.type == 'checkbox') {
        toggle(event.target.parentElement.getAttribute('data-key'));
    }
    if (event.target.classList.contains('delete-button')) {
        deleteTodo(event.target.parentElement.getAttribute('data-key'));
    }
});

