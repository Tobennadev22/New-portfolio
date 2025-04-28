import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { Box } from "@chakra-ui/react";
// import Clients from "../layout/Clients";
import Motion from "../layout/Motion";

function Home() {
  return (
    <Box>
      <Header />
      <Motion />
      <Main />
      {/* <Clients /> */}

      <Footer />
    </Box>
  );
}

export default Home;
