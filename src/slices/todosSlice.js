import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // Reducer to add a new to-do
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    // Reducer to toggle the completed state of a to-do
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    // Reducer to set loading state
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    // Reducer to set an error
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

// Export the action creators
export const { addTodo, toggleTodo, setLoading, setError } = todosSlice.actions;

// Export the reducer
export default todosSlice.reducer;
