import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../features/todoSlice"
import { v4 as uuid } from "uuid"

const TodoForm = () => {
  const dispatch = useDispatch()
  const [task, setTask] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    if (task !== "") {
      const todoValue = {
        id: uuid(),
        status: "upcoming",
        todo: task,
      }

      dispatch(addTodo(todoValue))
      setTask("")
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className='flex w-full justify-between items-center gap-2 my-5'>
      <input
        type='text'
        placeholder='Enter task'
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className='input input-bordered input-primary w-full '
      />
      <button type='submit' className='btn btn-primary'>
        Add
      </button>
    </form>
  )
}

export default TodoForm
