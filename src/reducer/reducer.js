const defaultState = {
  url: 'http://localhost:3000',
  user_id: null,
  token: null,
  logged_in: false,
  username: null,
  question: 0,
  openness: 1,
  spiciness: 1
};

// REDUCERS
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'NEXT_QUESTION':
      if (state.question < 10) {
        return {
          ...state,
          question: state.question + 1
        };
      } else {
        return state;
      }

    case 'PREVIOUS_QUESTION':
      if (state.question > 0) {
        return {
          ...state,
          question: state.question - 1
        };
      }

    case 'UPDATE_OPENNESS':
      return {
        ...state,
        openness: action.payload
      };

    case 'UPDATE_SPICINESS':
      return {
        ...state,
        spiciness: action.payload
      };

    default:
      return state;
  }
}
