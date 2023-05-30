const initialState = {
  data: [],
  jwt: null,
  admin: null,
};

export default function dataReducer(state = {}, action) {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        data: action.payload,
      };
    case "SET_JWT":
      return {
        ...state,
        jwt: action.payload,
      };
    case "SET_Admin":
      return {
        ...state,
        admin: action.payload,
      };
    default:
      return state;
  }
}
