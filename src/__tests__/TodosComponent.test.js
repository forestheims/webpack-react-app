import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import TodosComponent from '../components/Todos/TodosComponent.jsx';

// Create a mock store
const mockStore = configureStore([]);
let store;

describe('TodosComponent', () => {
  beforeEach(() => {
    // Initialize mock store with empty state
    store = mockStore({
      todos: {
        todos: [], // Assuming your initial state for todos is an empty array
      },
    });

    // Mock the dispatch function
    store.dispatch = jest.fn();
  });

  test('should add a new todo when form is submitted', () => {
    const newTodoText = 'New Todo';

    render(
      <Provider store={store}>
        <TodosComponent />
      </Provider>
    );

    // Simulate user typing a new todo
    fireEvent.change(screen.getByPlaceholderText('Add a new todo'), {
      target: { value: newTodoText },
    });

    // Simulate submitting the form
    fireEvent.click(screen.getByText('Add Todo'));

    // Check if the correct action was dispatched
    expect(store.dispatch).toHaveBeenCalledWith({
      type: 'todos/addTodo', // Replace with the correct action type
      payload: expect.anything(), // Or more specific expectations about the payload
    });
  });
});
