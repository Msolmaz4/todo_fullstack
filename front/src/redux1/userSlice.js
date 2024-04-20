import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState= {
    userData: "",
    loading: false,
    error: null
}
export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (data, thunkAPI) => {
        console.log(data,"loginuser")
      try {
        const response = await axios.post(`https://todo-fullstack-o40bwlk9m-msolmaz4s-projects.vercel.app/user/login`,data);
        console.log(response.data,"response")
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.message });
      }
    }
  );

export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (data, thunkAPI) => {
        console.log(data,"registeruser")
      try {
        const response = await axios.post(`https://todo-fullstack-o40bwlk9m-msolmaz4s-projects.vercel.app/user/register`,data);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.message });
      }
    }
  );

  export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    
    },
    extraReducers: (builder) => {
      builder
        .addCase(loginUser.fulfilled, (state, action) => {
            console.log(action.payload.data,"pazload")
          state.userData = action.payload.data;
        })
       
    },
  })
  export default userSlice.reducer;
