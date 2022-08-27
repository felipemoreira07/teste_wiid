import axios from "axios";

export const getMenus = () => {
  const url = `${process.env.REACT_APP_BASE_URL}/menus`;
  return axios({
    url: url,
    method: "get",
  });
};

export const getSubMenus = (id) => {
  const url = `${process.env.REACT_APP_BASE_URL}/items/${id}`;
  return axios({
    url: url,
    method: "get",
  });
};
