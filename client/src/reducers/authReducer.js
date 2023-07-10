export const authReducer = (
  state = { authData: null, error: false },
  action
) => {
  switch (action.type) {
    case "AUTH_START":
      return { ...state, error: false };
    case "AUTH_SUCCESS":
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data, error: false };
    case "AUTH_FAIL":
      return { ...state, error: true };
    case "LOG_OUT":
      localStorage.removeItem("profile");
      localStorage.removeItem("store");
      return { ...state, authData: null, error: false };
    case "UPDATING_START":
      return { ...state, error: false };
    case "UPDATING_SUCCESS":
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data, error: false };
    case "UPDATING_FAIL":
      return { ...state, error: true };
    case "FOLLOW_USER":
      return {
        ...state,
        authData: {
          ...state.authData,
          user: {
            ...state.authData.user,
            following: [...state.authData.user.following, action.data],
          },
        },
      };

    case "UNFOLLOW_USER":
      return {
        ...state,
        authData: {
          ...state.authData,
          user: {
            ...state.authData.user,
            following: [
              ...state.authData.user.following.filter(
                (personId) => personId !== action.data
              ),
            ],
          },
        },
      };

    default:
      return state;
  }
};

export const postReducer = (state = { posts: [], error: false }, action) => {
  switch (action.type) {
    // belongs to PostShare.jsx
    case "UPLOAD_START":
      return { ...state, error: false };
    case "UPLOAD_SUCCESS":
      return { ...state, posts: [action.data, ...state.posts], error: false };
    case "UPLOAD_FAIL":
      return { ...state, error: true };
    // belongs to Posts.jsx
    case "RETREIVING_START":
      return { ...state, loading: true, error: false };
    case "RETREIVING_SUCCESS":
      return { ...state, posts: action.data, loading: false, error: false };
    case "RETREIVING_FAIL":
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

// export default {authReducer, postReducer};
