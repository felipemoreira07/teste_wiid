import { Box, IconButton, Typography } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SubConta from "./SubContas";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubMenusAction } from "../store/actions/actions";

const Contas = () => {
  const [showCaixas, setShowCaixas] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubMenusAction());
  }, [dispatch]);

  const subMenu = useSelector((state) => state.subMenus);

  return (
    <>
      {subMenu.map((menu) => {
        const throwSubAccounts = () => {
          if (showCaixas) {
            setShowCaixas(null);
          } else {
            setShowCaixas(menu.id);
          }
        };

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
                onClick={throwSubAccounts}
                sx={{
                  color: "gray",
                  fontSize: "1rem",
                  "&:hover": {
                    color: "black",
                  },
                  cursor: "pointer",
                }}
              >
                {menu.name}
              </Typography>
              <IconButton onClick={throwSubAccounts}>
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
