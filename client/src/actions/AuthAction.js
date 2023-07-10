import * as AuthApi from "../api/AuthRequest";

export const logIn = (formData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.logIn(formData);
    dispatch({ type: "AUTH_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL" });
  }
};

export const signUp = (formData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.signUp(formData);
    dispatch({ type: "AUTH_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL" });
  }
};

export const uploadImage = (data) => async (dispatch) => {
  try {
    await AuthApi.uploadImage(data);
  } catch (error) {
    console.log(error);
  }
};

export const uploadPost = (data) => async (dispatch) => {
  dispatch({ type: "UPLOAD_START" });
  try {
    const newPost = await AuthApi.uploadPost(data);
    dispatch({ type: "UPLOAD_SUCCESS", data: newPost.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "UPLOAD_FAIL" });
  }
};

export const getTimelinePosts = (id) => async (dispatch) => {
  dispatch({ type: "RETRIVING_START" });
  try {
    const { data } = await AuthApi.getTimelinePosts(id);
    dispatch({ type: "RETRIVING_SUCCESS", data: data });
  } catch (error) {
    dispatch({ type: "RETRIVING_FAIL" });
    console.log("Error in getting timeline posts", error);
  }
};

export const logOut = () => async(dispatch) => {
  dispatch({type: "LOG_OUT"});
}

export const updateUser=(id, formData)=> async(dispatch)=> {
  dispatch({type: "UPDATING_START"})
  try{
      const {data} = await AuthApi.updateUser(id, formData);
      console.log("Action ko receive hoa hy ye : ",data)
      dispatch({type: "UPDATING_SUCCESS", data: data})
  }   
  catch(error){
      dispatch({type: "UPDATING_FAIL"})
  }
}

export const followUser = (id, data)=> async(dispatch)=>{
  dispatch({type: "FOLLOW_USER"})
  AuthApi.followUser(id, data);
}

export const unFollowUser = (id, data)=> async(dispatch)=>{
  dispatch({type: "UNFOLLOW_USER"})
  AuthApi.unFollowUser(id, data);
}
