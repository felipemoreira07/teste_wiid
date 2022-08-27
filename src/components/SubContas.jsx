import { Box, Typography } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { getSubMenus } from "../services/service";

const SubConta = ({ name, id, setMessages }) => {
  const fetch = async () => {
    const { data } = await getSubMenus(id);
    setMessages(data);
  };

  return (
    <Box
      key={id}
      onClick={() => fetch()}
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
        <StarBorderIcon color="action" />
        <Typography
          variant="body2"
          sx={{
            color: "gray",
            fontSize: "1rem",
          }}
        >
          {name}
        </Typography>
      </Box>
    </Box>
  );
};

export default SubConta;
