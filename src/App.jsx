import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import { useState, useEffect } from 'react'

function App() {
  const [todoValue, setTodoValue] = useState('')
  const [todos, setTodos] = useState([])

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
  }

  function handleAddTodos(newTodos) {
    let newTodoList = [...todos, newTodos]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodos(index){
    const newTodoList = todos.filter((todo, todoIndex) => {

      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodos(index){
    const valueToBeEditied = todos[index]
    setTodoValue(valueToBeEditied)
    handleDeleteTodos(index)
  }

  useEffect(() => {
    if (!localStorage){
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos){
      return
    }

    console.log(localTodos)
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  return (
    <>
        <TodoInput handleAddTodos={handleAddTodos} todoValue={todoValue} setTodoValue={setTodoValue}/>
        <TodoList todoListed={todos} handleDeleteTodos={handleDeleteTodos} handleEditTodos={handleEditTodos} />
    </>
  )
}

export default App