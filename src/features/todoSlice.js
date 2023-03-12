import { createSlice } from "@reduxjs/toolkit"

// const initialState = [
//   { id: 1, todo: "task one", status: "upcoming" },
//   { id: 2, todo: "task two", status: "upcoming" },
//   { id: 3, todo: "task three", status: "ongoing" },
//   { id: 4, todo: "task four", status: "ongoing" },
//   { id: 5, todo: "task five", status: "completed" },
// ]

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.unshift(action.payload)
    },

    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload)
    },

    updateStatus: (state, action) => {
      const todoIndex = state.findIndex((todo) => todo.id === action.payload)
      if (state[todoIndex].status === "upcoming") {
        return void (state[todoIndex].status = "ongoing")
      }
      if (state[todoIndex].status === "ongoing") {
        return void (state[todoIndex].status = "completed")
      }
    },
    demodeStatus: (state, action) => {
      const todoIndex = state.findIndex((todo) => todo.id === action.payload)
      if (state[todoIndex].status === "ongoing") {
        return void (state[todoIndex].status = "upcoming")
      }
      if (state[todoIndex].status === "completed") {
        return void (state[todoIndex].status = "ongoing")
      }
    },
  },
})

export const { addTodo, removeTodo, updateStatus, demodeStatus } =
  todoSlice.actions

export default todoSlice.reducer
