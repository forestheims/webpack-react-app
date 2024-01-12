import supabase from '../client';

const getTodos = async () => {
  const { status, data, error } = await supabase.from('todos').select();
  return { status, data, error };
};

const addTodo = async (todo) => {
  // make sure data object is the same structure
  const { status, data, error } = await supabase.from('todos').insert(todo);
  return { status, data, error };
};

const updateTodo = async (id, updatedData) => {
  const { status, error } = await supabase
    .from('todos')
    // update object
    .update(updatedData)
    // identifier: 'id', 1
    // : 'column', value
    // below is an example not yet aligned with an actual database table
    .eq('id', id);
  return { status, error };
};

const deleteTodo = async (id) => {
  const { status, error } = await supabase.from('todos').delete().eq('id', id);
  return { status, error };
};

export { getTodos, addTodo, updateTodo, deleteTodo };
