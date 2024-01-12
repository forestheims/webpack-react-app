import supabase from '../client';

const signIn = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({
    email: 'example@email.com',
    password: 'example-password',
  });
  return { data, error };
};

const signInWithOAuth = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
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

export { signIn, signInWithOAuth, signOut };
