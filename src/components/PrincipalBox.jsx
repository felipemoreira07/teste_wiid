import { Box } from "@mui/material";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

const PrincipalBox = () => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <HeaderLeft />
      <HeaderRight />
    </Box>
  );
};

export default PrincipalBox;
