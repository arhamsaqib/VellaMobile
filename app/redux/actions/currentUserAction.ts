export interface User {
  id?: string;
  email?: string;
  pass?: string;
  pin?: string;
  role?: string;
  set?: string;
}

const setCurrentUser = (user: User) => {
  return {
    type: 'updateCurrentUser',
    user: user,
  };
};

export default setCurrentUser;
