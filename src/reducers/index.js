// reducers/index.js

const storedGroups = JSON.parse(localStorage.getItem("groups") || "[]");

const initialState = {
  groups: storedGroups,
  selectedGroup: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_GROUP":
      return {
        ...state,
        groups: [...state.groups, action.payload],
      };
    case "SELECT_GROUP":
      return {
        ...state,
        selectedGroup: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
