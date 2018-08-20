const defaultState = {
  // url: 'http://localhost:3000',
  url: 'https://food-freud.herokuapp.com/',
  user_id: null,
  token: null,
  logged_in: false,
  username: null,
  personality: 1,
  location: 12345,
  question: 0,
  subjective: 'nobody!',
  objective: 'nobody!',
  deductive: 'nobody!',
  inductive: 'nobody!',
  spiciness: 0,
  favorites: [],
  restaurants: []
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
      } else {
        break;
      }

    case 'UPDATE_TRAIT':
      return {
        ...state,
        [action.trait]: action.payload
      };

    case 'ADD_RESTAURANTS':
      const list = [...state.restaurants];
      list.push(...action.payload);
      const uniqList = Array.from(new Set(list));
      return {
        ...state,
        restaurants: uniqList
      };

    case 'ADD_FAV':
      const newRest = state.favorites;
      newRest.push(action.payload);
      const uniqFav = Array.from(new Set(newRest));

      return {
        ...state,
        favorites: uniqFav
      };

    case 'REMOVE_FAV':
      let remRest = state.favorites;
      const index = remRest.indexOf(action.payload);
      remRest.splice(index, 1);
      return {
        ...state,
        favorites: remRest
      };

    default:
      return state;
  }
}
