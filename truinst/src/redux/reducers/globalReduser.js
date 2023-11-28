import { GLOBAL_TYPES } from "../types/globalTypes";


export const ALERT_STATUS = {
  ERROR: "error",
  SUCCESS: "success"
}


const initialState = {
  loading: false,
  /* error: "",
  success: "", это для первого способа*/
  status: "",
  message: ""
};

const globalReduser = (state = initialState, action) => {
    switch (action.type) {
      case GLOBAL_TYPES.LOADING:
        return {
          ...state,
          loading: action.payload,
        };
        /* case GLOBAL_TYPES.ERROR:
          return {
            ...state,
            error: action.payload,
          };
        case GLOBAL_TYPES.SUCCESS:
            return {
              ...state,
              success: action.payload,
            }; */
            case GLOBAL_TYPES.ALERT:
            return {
              ...state,
              status: action.payload.status,
              message: action.payload.message
            };
            case GLOBAL_TYPES.RESET:
              return action.payload;
            
        
      default:
        return state
    }
};

export default globalReduser