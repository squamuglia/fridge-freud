const defaultState = {
  url: 'http://localhost:3000',
  user_id: null,
  token: null,
  logged_in: false,
  username: null,
  personality: 1,
  location: 12345,
  question: 0,
  openness: 0,
  conscientiousness: 0,
  extraversion: 0,
  agreeableness: 0,
  neuroticism: 0,
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

    case 'UPDATE_TRAIT':
      return {
        ...state,
        [action.trait]: action.payload
      };

    default:
      return state;
  }
}
