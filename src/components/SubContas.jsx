import { Box, Typography } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { addMessages } from "../store/data/data";
import { useDispatch } from "react-redux";

const SubConta = ({ name, id }) => {
  const dispatch = useDispatch();

  return (
    <Box
      key={id}
      onClick={() => dispatch(addMessages(id))}
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
