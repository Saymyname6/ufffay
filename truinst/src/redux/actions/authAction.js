import { ALERT_STATUS } from "../reducers/globalReduser";
import { AUTH_MODAL_TYPES } from "../types/authModalTypes";
import { AUTH_TYPES } from "../types/authTypes";
import { GLOBAL_TYPES } from "../types/globalTypes";
import {api} from "@/api"


export const login = (userData) => async (dispatch) =>{
  try {
  dispatch({type: GLOBAL_TYPES.LOADING,payload:true  })
    const {data } = await api.post("login",userData);

   if(data){
      dispatch({
        type: AUTH_TYPES.AUTH,
        payload:{
          user: data.user,
          token:data.access_token,
        },
      });
    }
      dispatch({
        type: GLOBAL_TYPES.LOADING,
        payload:false
      })
      dispatch({
        type: AUTH_MODAL_TYPES.MODAL,
        payload:
        {open:false,view:'login'} 
      });
      dispatch({type: GLOBAL_TYPES.ALERT, payload: 
        {
          status: ALERT_STATUS.SUCCESS,
          message: "оки,ты зашла,сестра <3",
        },
        });

      localStorage.setItem("token",data.access_token)
      
} catch (err) {
  dispatch({type: GLOBAL_TYPES.ALERT, payload: 
  {
    status: ALERT_STATUS.ERROR,
    message: err.response.data.msg,
  },
  });
  dispatch({type: GLOBAL_TYPES.LOADING,payload:false})
    
  };
};

export const getUser = () => async(dispatch) => {
  const token = localStorage.getItem('token');
  if(token){
    try {
      dispatch({type: GLOBAL_TYPES.LOADING,payload:true  })
      const {data} = await api.post("refresh_token",userData);
    
        if(data){
          dispatch({
            type: AUTH_TYPES.AUTH,
            payload:{
              user: data.user,
              token:data.access_token,
            },  
          });
        }
          dispatch({
            type: GLOBAL_TYPES.LOADING,
            payload:false
          }) 
          localStorage.setItem("token",data.access_token)
    } catch (err) {
      dispatch({
            type: GLOBAL_TYPES.LOADING,
            payload:false
          });
      };
  };
};

export const registerUser = (userData) => async(dispatch) => {
  try {
    delete userData.cf_password;
    dispatch({type: GLOBAL_TYPES.LOADING, payload: true})

      const res = await api.post("register",userData);

      if(res.data){
        dispatch({type: GLOBAL_TYPES.ALERT, payload: 
          {
            status: ALERT_STATUS.SUCCESS,
            message: "регистрация пройдена,сестра <3",
          },
          });

    dispatch({type: GLOBAL_TYPES.LOADING, payload: false})

    dispatch({
      type: AUTH_MODAL_TYPES.MODAL,
      payload:
      {open:true,view:'login'} 
    });
    };
   } catch (err) {
    dispatch({type: GLOBAL_TYPES.ALERT, payload: 
      {
        status: ALERT_STATUS.ERROR,
        message: err.response.data.msg,
      }
      }) 
      
    dispatch({type: GLOBAL_TYPES.LOADING, payload: false})
    
  }
};

export const logout = () => async(dispatch) => {
  try {

    const res = api.post("logout")

    if(res.data){
      localStorage.clear()
      dispatch({type: AUTH_TYPES.AUTH,payload : {
        user: null,
        token: ""
      }})
    }

    
  } catch (err) {
    dispatch({type: GLOBAL_TYPES.ALERT, payload: 
      {
        status: ALERT_STATUS.ERROR,
        message: err.response.data.msg,
      }
      }) 
    
  }



}
