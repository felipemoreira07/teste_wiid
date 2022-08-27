import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ArchiveIcon from "@mui/icons-material/Archive";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SearchIcon from "@mui/icons-material/Search";
import Emails from "./Emails";
import { useState } from "react";

const HeaderRight = ({ messages }) => {
  const [showEmails, setShowEmails] = useState(true);

  const archiveEmails = () => {
    setShowEmails(false);
  };

  const revealEmails = () => {
    setShowEmails(true);
  };

  return (
    <Box
      sx={{
        bgcolor: "white",
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
        <TextField id="pesquisa" label="pesquisa" />
      </Box>

      <Box
        sx={{
          marginTop: "1rem",
          marginBottom: "1rem",
          marginLeft: "1rem",
        }}
      >
        <Button
          sx={{ marginRight: "1rem" }}
          onClick={revealEmails}
          variant="contained"
          startIcon={<AssignmentIcon />}
        >
          Atribuir
        </Button>
        <Button
          sx={{ marginRight: "1rem" }}
          onClick={archiveEmails}
          variant="contained"
          startIcon={<ArchiveIcon />}
        >
          Arquivar
        </Button>
        <Button
          sx={{ marginRight: "1rem" }}
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
