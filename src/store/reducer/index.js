export const initialState = {
  isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
  user: JSON.parse(localStorage.getItem("user")) || null,
  client_id: "78c09e9ecdf9c48ec927",
  redirect_uri: "http://localhost:3000/repos",
  client_secret: "c0dd810093d60545bde2c06680c0cf0904961d38",
  proxy_url: "http://localhost:5000/authenticate"
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN": {
      localStorage.setItem("isLoggedIn", JSON.stringify(action.payload.isLoggedIn))
      localStorage.setItem("user", JSON.stringify(action.payload.user))
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        user: action.payload.user
      };
    }
    default:
      return state;
  }
};
