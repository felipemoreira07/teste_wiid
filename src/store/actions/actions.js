import { getSubMenus, getMessages } from "../../services/service";

export const getSubMenusAction = () => {
  return async (dispatch) => {
    try {
      const response = await getSubMenus();
      const menuInfo = response.data;
      dispatch({
        type: "submenus",
        payload: menuInfo,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getMessagesAction = (id) => {
  return async (dispatch) => {
    try {
      const response = await getMessages(id);
      const messagesInfo = response.data;
      dispatch({
        type: "messages",
        payload: messagesInfo,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
