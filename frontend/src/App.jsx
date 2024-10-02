import { Box} from "@chakra-ui/react"
import React from "react";
import { Route, Routes } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import NavBar from "./components/Navbar";


function App() {
  return (
    <>
      <Box minH={"100vh"}>
      <NavBar /> {/*keeps Navbar at the top of every page */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />

        </Routes>

      </Box>
    </>
  );
}

export default App
