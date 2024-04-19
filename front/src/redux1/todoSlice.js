import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
  todoss: []
}
export const todos = createAsyncThunk(
    'todos/',
    async (todo, thunkAPI) => {
        console.log(todo,"todos")
      try {
        const response = await axios.post(`http://localhost:8000/todos`,todo);
        console.log(response.data,"todos")
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.message });
      }
    }
  );
export const todosl = createAsyncThunk(
    'todos/',
    async (todo, thunkAPI) => {
        console.log(todo,"todos")
      try {
        const response = await axios.get(`http://localhost:8000/todos`);
        console.log(response.data,"todos")
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.message });
      }
    }
  );
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(todosl.fulfilled, (state, action) => {
          console.log(action.payload.data,"todosl")
        state.todoss = action.payload.data;
        console.log(state.todoss,"state")
      })
     
  },
})

// Action creators are generated for each case reducer function
export const {  } = todoSlice.actions

export default todoSlice.reducer