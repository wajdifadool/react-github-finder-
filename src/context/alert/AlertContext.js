import { createContext, useReducer } from 'react';
import alertReducer from './AlertReducer';

// crate our contet
const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const initalState = null;

  const [state, dispatch] = useReducer(alertReducer, initalState);

  // set an alert
  const setAlert = (msg, type) => {
    // dispatch goes here
    dispatch({
      type: 'SET_ALERT',
      payload: { msg, type },
    });

    setTimeout(() => {
      dispatch({
        type: 'REMOVE_ALERT',
      });
    }, 1500);
  };
  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
