// const storedUser = JSON.parse(localStorage.getItem("user"));

// export const initialState = {
//   user: getUserfromLocalStorage ? getUserfromLocalStorage : null,
// };

const getStorLocal = (item) => {
  if (typeof localStorage !== "undefined") {
    return localStorage.getItem(item);
  }
  return null;
};
const setStorLocal = (item, value) => {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem(item, value);
  }
};

export const getInitialState = () => {
  const item = JSON.parse(getStorLocal("user"));

  return item
    ? {
        user: item,
      }
    : {
        user: null,
      };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      localStorage.setItem(
        "user",
        JSON.stringify({
          accessToken: action.user.accessToken,
        })
      );
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
