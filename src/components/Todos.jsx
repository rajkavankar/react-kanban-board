import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { removeTodo, updateStatus, demodeStatus } from "../features/todoSlice"
import { FaCheck, FaTimes, FaTrash } from "react-icons/fa"

const Todos = () => {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  const upcomingTodos = todos.filter((todo) => todo.status === "upcoming")

  const ongoingTodos = todos.filter((todo) => todo.status === "ongoing")

  const completedTodos = todos.filter((todo) => todo.status === "completed")

  const handleDelete = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(removeTodo(id))
    }
  }

  return (
    <div>
      <div className='flex w-full justify-between gap-10'>
        <div className='flex-1'>
          <h2 className='text-xl'>Upcoming tasks</h2>
          {upcomingTodos.map((todo) => (
            <div
              key={todo.id}
              className={`card bg-blue-500 text-black m-2 w-full`}>
              <div className='card-body'>
                <h6 className='text-xl flex justify-between items-center'>
                  {todo.todo}
                  <div className='flex '>
                    <FaTrash
                      className='mr-4 cursor-pointer'
                      onClick={() => handleDelete(todo.id)}
                    />
                    <FaCheck
                      className='cursor-pointer'
                      onClick={() => dispatch(updateStatus(todo.id))}
                    />
                  </div>
                </h6>
              </div>
            </div>
          ))}
        </div>
        <div className='flex-1'>
          <h2 className='text-xl'>Ongoing tasks</h2>
          {ongoingTodos.map((todo) => (
            <div
              key={todo.id}
              className={`card bg-purple-500 text-black m-2 w-full`}>
              <div className='card-body'>
                <h6 className='text-xl flex justify-between items-center'>
                  {todo.todo}
                  <div className='flex '>
                    <FaTrash
                      className='mr-2 cursor-pointer'
                      onClick={() => handleDelete(todo.id)}
                    />
                    <FaTimes
                      className=' mr-2 cursor-pointer'
                      onClick={() => dispatch(demodeStatus(todo.id))}
                    />
                    <FaCheck
                      className='cursor-pointer'
                      onClick={() => dispatch(updateStatus(todo.id))}
                    />
                  </div>
                </h6>
              </div>
            </div>
          ))}
        </div>
        <div className='flex-1'>
          <h2 className='text-xl'>Completed tasks</h2>
          {completedTodos.map((todo) => (
            <div
              key={todo.id}
              className={`card bg-green-500 text-black m-2 w-full`}>
              <div className='card-body'>
                <h6 className='text-xl flex justify-between items-center'>
                  {todo.todo}
                  <div className='flex '>
                    <FaTrash
                      className='mr-4 cursor-pointer'
                      onClick={() => handleDelete(todo.id)}
                    />
                    <FaTimes
                      className='cursor-pointer'
                      onClick={() => dispatch(demodeStatus(todo.id))}
                    />
                  </div>
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Todos
