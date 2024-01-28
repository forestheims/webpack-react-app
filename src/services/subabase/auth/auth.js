import supabase from '../client';

const signUp = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  return { data, error };
};

const logIn = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  return { data, error };
};

const signInWithOAuth = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: 'https://cosmicaxe.netlify.app/user',
    },
  });
  return { data, error };
};

const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

export { signUp, logIn, signInWithOAuth, signOut };
