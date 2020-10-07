import { v4 as uuid } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

//dispatch is used from thunk middleware

// takes the msg and alertType from Register.js Component. This is basically what the setAlert function does, creating a
//alert msg once called from the component. It's then sent to the Alert.js Component, which acts as a visual component
//to show you the error message. Comment is long, sorry.
export const setAlert = (msg, alertType, timeout = 5000) => (dispatch) => {
  const id = uuid();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  });

  //action used to remove the error message after a certain amount of time, using timeout
  setTimeout(
    () =>
      dispatch({
        type: REMOVE_ALERT,
        payload: id,
      }),
    // destructured time above
    timeout
  );
};
