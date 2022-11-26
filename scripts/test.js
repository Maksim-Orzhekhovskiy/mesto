// можно подключать файл таким образом
// import { todosList } from './data.js'
// или таким, если есть export default
// import todosList from './data.js'

const todosList = [
    {
        title: 'Работать',
        image: 'https://images.unsplash.com/photo-1669272593111-122465978e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80'
    },
    {
        title: 'Еще работать',
    },
    {
        title: 'Прекратить работать',
    }
]

const todosListElement = document.querySelector('.todos__list')
const todoTemplate = document.querySelector('#todo-template').content.querySelector('.todos__item')
const form = document.querySelector('.form')
const formInput = document.querySelector('[name="place-name"]')

function createElement(item) {
    const todo = todoTemplate.cloneNode(true);
    const todoTitle = todo.querySelector('.todo__title')
    const todoDeleteButton = todo.querySelector('.todo__delete-button')
    const todoLikeButton = todo.querySelector('.todo__like-button')
    // Пример для изображений
    const img = todo.querySelector('img')
    img.src = item.image



    // Обработчики кликов для кнопок лайка и удаления
    todoDeleteButton.addEventListener('click', handleDeleteButtonClick)
    todoLikeButton.addEventListener('click', handleLikeButtonClick)


    todoTitle.textContent = item.title

    return todo;
}

const handleLikeButtonClick = (e) => {
    e.target.classList.toggle('todo__like-button_is-active')
}


const handleDeleteButtonClick = (e) => {
    e.target.closest('.todos__item').remove()
}


// Функция делает две вещи - создает элемент (вызывая createElement) и добавляет его на страницу
// item - объект с данными todo
// wrapElement - элемент, в который добавится наш новый todo
const renderTodo = (item, wrapElement) => {
    const element = createElement(item)
    wrapElement.append(element);
}

todosList.forEach(function(item) {
    renderTodo(item, todosListElement)
})
