import supabase from '../client';

const getSession = async () => {
  const { data, error } = await supabase.auth.getSession();
  //const { user, session } = data;
  return { data, error };
};

const refreshSession = async (refresh_token) => {
  const { data, error } = await supabase.auth.refreshSession({ refresh_token });
  //const { user, session } = data;
  return { data, error };
};

const getUser = async (jwt) => {
  const { data, error } = await supabase.auth.getUser(jwt);
  //const { user } = data;
  return { data, error };
};

const updateUser = async ({
  email = null,
  password = null,
  metadata = null,
  phone = null,
}) => {
  const response = { data: [], error: [] };
  if (email) {
    const { data, error } = await supabase.auth.updateUser({ email: email });
    response.data.push(data);
    response.error.push(error);
  }
  if (password) {
    const { data, error } = await supabase.auth.updateUser({
      password: password,
    });
    response.data.push(data);
    response.error.push(error);
  }
  if (metadata) {
    // metadata is an object
    const { data, error } = await supabase.auth.updateUser({ data: metadata });
    response.data.push(data);
    response.error.push(error);
  }
  if (phone) {
    const { data, error } = await supabase.auth.updateUser({ phone: phone });
    response.data.push(data);
    response.error.push(error);
  }
  return response;
};

export { getSession, refreshSession, getUser, updateUser };
