import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';

import { makeStyles } from "@material-ui/core/styles";
import "../styles/emailItem.css";

const useStyles = makeStyles({
    info: {
        display: "flex",
        flexDirection: "column",
    },
    text: {
        color: 'black',
        fontSize: '1rem',
    },
    entrance: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    date: {
        position: 'absolute',
        right: '5rem',
        color: 'black',
        fontSize: '0.8rem',
    },
})


const EmailItem = ({owner, name, subject, date}) => {
    const classes = useStyles();

    return (
        <Box className="root">
            <Avatar>
              {owner}
            </Avatar>
            <Box className={classes.info}>
              <Typography variant="body2" className={classes.text}>{name}</Typography>
              <Typography variant="body2" className={classes.text}>{subject}</Typography>
              <Box className={classes.entrance}>
                <WhatsAppIcon sx={{marginRight:"0.2rem"}}/>
                <Typography variant="body2" className={classes.text}>Caixa de entrada</Typography>
              </Box>
            </Box>
            

            <Box className={classes.date}>
              <Box className="dateEmogis">
                <DeleteIcon fontSize="small"/>
                <EmailIcon fontSize="small"/>
                <EmojiFlagsIcon fontSize="small"/>
              </Box>
              <Typography variant="body2" className={classes.text}>{date}</Typography>
            </Box>
        </Box>
    )
}

export default EmailItem;