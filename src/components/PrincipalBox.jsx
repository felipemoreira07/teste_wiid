import { Box } from "@mui/material";
import { useState } from "react";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

const PrincipalBox = () => {
  const [messages, setMessages] = useState(null);

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <HeaderLeft setMessages={setMessages} />
      <HeaderRight messages={messages} />
    </Box>
  );
};

export default PrincipalBox;
