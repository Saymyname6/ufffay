import { AUTH_MODAL_TYPES } from "../types/authModalTypes";

const initialState = {
  open: false,
  view: "login",
};

const authModal = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_MODAL_TYPES.MODAL:
      return action.payload;

    default:
      return state;
  }
};

export default authModal;
