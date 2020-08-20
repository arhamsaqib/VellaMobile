const INITIAL_STATE: string = '';
export interface User {
  id?: string;
  email?: string;
  pass?: string;
  pin?: string;
  role?: string;
  set?: string;
}

const setCurrentReducer = (state = INITIAL_STATE, action: any) => {
  // console.log('in add counter reducer');
  switch (action.type) {
    case 'updateCurrentUser': {
      return action.user;
    }
    default:
      return state;
  }
};

export default setCurrentReducer;
