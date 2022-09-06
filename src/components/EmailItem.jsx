import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import DeleteIcon from "@mui/icons-material/Delete";
import EmailIcon from "@mui/icons-material/Email";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";

import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import "../styles/emailItem.css";

const useStyles = makeStyles({
  info: {
    display: "flex",
    flexDirection: "column",
  },
  entrance: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  date: {
    position: "absolute",
    right: "5rem",
    color: "red",
    fontSize: "0.8rem",
  },
});

const EmailItem = ({ owner, name, subject, date }) => {
  const classes = useStyles();
  const [messageDeleted, setMessageDeleted] = useState(false);
  const [showIcons, setShowIcons] = useState(false);

  return (
    <>
      {!messageDeleted && (
        <Box
          className="root"
          onMouseEnter={() => {
            setShowIcons(true);
          }}
          onMouseLeave={() => {
            setShowIcons(false);
          }}
        >
          <Avatar>{owner}</Avatar>
          <Box className={classes.info}>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                fontSize: "1rem",
                fontFamily: "Cabin",
              }}
            >
              {name}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                fontSize: "1rem",
                fontFamily: "Cabin",
              }}
            >
              {subject}
            </Typography>
            <Box className={classes.entrance}>
              <WhatsAppIcon color="action" sx={{ marginRight: "0.2rem" }} />
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  fontSize: "1rem",
                  fontFamily: "Cabin",
                }}
              >
                Caixa de entrada
              </Typography>
            </Box>
          </Box>

          <Box className={classes.date}>
            {showIcons && (
              <Box className="dateEmogis">
                <DeleteIcon
                  onClick={() => {
                    setMessageDeleted(true);
                  }}
                  fontSize="small"
                  color="action"
                  sx={{
                    cursor: "pointer",
                  }}
                />
                <EmailIcon fontSize="small" color="action" />
                <EmojiFlagsIcon fontSize="small" color="action" />
              </Box>
            )}

            <Typography variant="body2" className={classes.text}>
              {date}
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
};

export default EmailItem;
