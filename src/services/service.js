import axios from "axios";

export const getSubMenus = () => {
  const url = `${process.env.REACT_APP_BASE_URL}/menus`;
  return axios({
    url: url,
    method: "get",
  });
};

export const getMessages = (id) => {
  const url = `${process.env.REACT_APP_BASE_URL}/items/${id}`;
  return axios({
    url: url,
    method: "get",
  });
};
