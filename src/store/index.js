import { createStore } from 'redux';

const INITIAL_STATE = [];

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        {
          id: state.length + 1,
          text: action.payload.text,
        },
      ];
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
