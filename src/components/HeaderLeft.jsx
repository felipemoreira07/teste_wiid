import { Box, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";

import "../styles/left.css";
import { deepOrange } from "@mui/material/colors";
import Contas from "./Contas";
import { Link } from "react-router-dom";

const HeaderLeft = ({ setMessages }) => {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        height: "100vh",
        width: "20vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link
          to="/logout"
          style={{
            color: "transparent",
          }}
        >
          <Avatar
            sx={{
              bgcolor: deepOrange[500],
              marginTop: "1rem",
              marginLeft: "1rem",
              cursor: "pointer",
            }}
          >
            OA
          </Avatar>
        </Link>
      </Box>

      <hr></hr>

      <Typography
        variant="body2"
        sx={{
          marginLeft: "1rem",
          color: "text.secondary",
          fontSize: "16px",
          fontFamily: "Cabin",
        }}
      >
        Favoritos
      </Typography>

      <Contas setMessages={setMessages} />
    </Box>
  );
};

export default HeaderLeft;
