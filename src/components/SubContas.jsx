import { Box, Typography } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useDispatch } from "react-redux";

const SubConta = ({ name, id }) => {
  const dispatch = useDispatch();
  const getId = () => {
    dispatch({
      type: "id",
      payload: id,
    });
  };

  return (
    <Box
      key={id}
      onClick={getId}
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
            cursor: "pointer",
            "&:hover": {
              color: "black",
            },
          }}
        >
          {name}
        </Typography>
      </Box>
    </Box>
  );
};

export default SubConta;
