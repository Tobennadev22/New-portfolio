import "../styles/Global.css";
import { Box } from "@chakra-ui/react";

function FadeIn({ children }) {
  return <Box className="fade-In">{children}</Box>;
}

export default FadeIn;
