import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ArchiveIcon from "@mui/icons-material/Archive";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Emails from "./Emails";
import { useState, useContext } from "react";
import { ColorModeContext } from "../store/ColorModeContext";

const HeaderRight = ({ messages }) => {
  const { mode, toggleColorMode } = useContext(ColorModeContext);
  const [showEmails, setShowEmails] = useState(true);

  const archiveEmails = () => {
    setShowEmails(false);
  };

  const revealEmails = () => {
    setShowEmails(true);
  };

  const colorMode = mode === "light" ? <DarkModeIcon /> : <LightModeIcon />;
  const modeMessage = mode === "light" ? "Dark Mode" : "Light Mode";

  return (
    <Box
      sx={{
        bgcolor: "background.default",
        height: "100vh",
        width: "80vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "90%",
          marginTop: "1rem",
          marginLeft: "1rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField id="pesquisa" />
        <Button
          onClick={toggleColorMode}
          variant="outlined"
          startIcon={colorMode}
          sx={{
            marginLeft: "2rem",
            fontFamily: "Cabin",
          }}
        >
          {modeMessage}
        </Button>
      </Box>

      <Box
        sx={{
          marginTop: "1rem",
          marginBottom: "1rem",
          marginLeft: "1rem",
        }}
      >
        <Button
          sx={{
            marginRight: "1rem",
            marginBottom: "0.5rem",
            fontFamily: "Cabin",
          }}
          onClick={revealEmails}
          variant="contained"
          startIcon={<AssignmentIcon />}
        >
          Atribuir
        </Button>
        <Button
          sx={{
            marginRight: "1rem",
            marginBottom: "0.5rem",
            fontFamily: "Cabin",
          }}
          onClick={archiveEmails}
          variant="contained"
          startIcon={<ArchiveIcon />}
        >
          Arquivar
        </Button>
        <Button
          sx={{
            marginRight: "1rem",
            marginBottom: "0.5rem",
            fontFamily: "Cabin",
          }}
          variant="contained"
          startIcon={<CalendarMonthIcon />}
        >
          Agendar
        </Button>
      </Box>

      {showEmails && <Emails messages={messages} />}
    </Box>
  );
};

export default HeaderRight;
