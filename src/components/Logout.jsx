import { Box, Typography, Button } from "@mui/material";
import { Logout } from "@mui/icons-material";
import { makeStyles } from "@material-ui/styles";
import "../styles/logout.css";

const useStyles = makeStyles({
  centerBox: {
    width: "50%",
    height: "70%",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "action.hover",
    textAlign: "center",
  },
  logoutIcon: {
    color: "white",
    width: "6rem",
    height: "6rem",
    position: "relative",
    left: "50%",
    top: "20%",
    transform: "translate(-50%, -50%)",
  },
  title: {
    marginTop: "4rem",
    color: "white",
    fontSize: "2rem",
    fontWeight: "bold",
  },
  question: {
    marginTop: "2rem",
    color: "white",
    fontSize: "2rem",
    fontWeight: "200",
  },
  button: {
    marginTop: "1rem",
  },
});

const LogoutComp = () => {
  const classes = useStyles();

  return (
    <Box className={classes.centerBox}>
      <Logout className={classes.logoutIcon} />
      <Typography className={classes.title}>Logout</Typography>
      <Typography className={classes.question}>Deseja sair?</Typography>
      <Box className={classes.button}>
        <Button variant="contained">Sim</Button>
        <Button variant="contained">Não</Button>
      </Box>
    </Box>
  );
};

export default LogoutComp;
