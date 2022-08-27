import { Box, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import "../styles/left.css";
import { deepOrange } from "@mui/material/colors";
import Contas from "./Contas";
import { Link } from "react-router-dom";

const HeaderLeft = ({ setMessages }) => {
  return (
    <Box
      sx={{
        bgcolor: "lightgray",
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
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <Select
              sx={{
                width: "3rem",
                height: "1.6rem",
                marginTop: "1.3rem",
                marginLeft: "3rem",
              }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      <hr></hr>

      <Typography
        variant="body2"
        sx={{
          marginLeft: "1rem",
          color: "gray",
          fontSize: "16px",
        }}
      >
        Favoritos
      </Typography>

      <Contas setMessages={setMessages} />
    </Box>
  );
};

export default HeaderLeft;
