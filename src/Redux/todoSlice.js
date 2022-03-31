import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { v4 } from 'uuid';

export const getTodosAsync = createAsyncThunk();
export const addAsync = createAsyncThunk();
export const removeAsync = createAsyncThunk();
export const toogleCompletedAsync = createAsyncThunk();

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    add: (state, action) => {
        const newTodo= {id: v4(), title: action.payload, completed: false};
      state.push(newTodo);
    },
    remove: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toogleCompleted: (state, action) => {
      state.forEach((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
      });
    },
  },
  extraReducers: {
    [getTodosAsync.fulfilled]: (state, action) => {
      return action.payload.todos;
    },
    [addAsync]: (state, action) => {
      state.push(action.payload.todo);
    },
    [removeAsync]: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    [toogleCompletedAsync]: (state, action) => {
      state.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.completed = !todo.completed;
        }
      });
    }
  }
});
 export const { add, remove, toogleCompleted  } = todoSlice.actions;
 export default todoSlice.reducer;
