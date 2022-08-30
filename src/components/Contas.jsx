import { Box, IconButton, Typography } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useEffect, useState } from "react";
import SubConta from "./SubContas";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { addSubmenu } from "../store/data/data";

const Contas = () => {
  const dispatch = useDispatch();
  const [showCaixas, setShowCaixas] = useState(null);

  useEffect(() => {
    dispatch(addSubmenu());
  }, [dispatch]);

  const menus = useSelector((state) => console.log(state));

  return (
    <>
      {menus.map((menu) => {
        return (
          <Box
            key={menu.id}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                marginTop: "0.75rem",
                marginLeft: "1rem",
                marginRight: "1rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <AccountBoxIcon color="action" />
              <Typography
                variant="body2"
                sx={{
                  color: "gray",
                  fontSize: "1rem",
                }}
              >
                {menu.name}
              </Typography>
              <IconButton
                onClick={() => {
                  if (showCaixas) {
                    setShowCaixas(null);
                  } else {
                    setShowCaixas(menu.id);
                  }
                }}
              >
                <KeyboardArrowDownIcon color="action" />
              </IconButton>
            </Box>
            {showCaixas === menu.id &&
              menu.subMenus.map((subAccount) => {
                return (
                  <SubConta
                    key={subAccount.id}
                    id={subAccount.id}
                    name={subAccount.name}
                  />
                );
              })}
          </Box>
        );
      })}
    </>
  );
};

export default Contas;
