import React from "react"
import TodoForm from "./components/TodoForm"
import Todos from "./components/Todos"

const App = () => {
  return (
    <div className='container mx-auto'>
      <h1 className='text-3xl text-center my-3'>Kanban board</h1>
      <TodoForm />
      <Todos />
    </div>
  )
}

export default App
