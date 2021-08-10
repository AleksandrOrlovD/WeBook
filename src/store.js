import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/reducer';

const stringMiddleware = () => (dispatch) => (action) => {
  if (typeof action === 'string') {
    return dispatch({
      type: action,
    });
  }

  return dispatch(action);
}; //Позволяет использовать строки в качестве аргумента dispatch

const store = createStore(
  reducer,
  applyMiddleware(stringMiddleware)
);

export default store;