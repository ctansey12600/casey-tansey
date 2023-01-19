import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, Container } from "../styles";

import Layout from "./Layout";
import Home from "../pages/Home";
import About from "../pages/About";
// import PortfolioSelection from "../pages/portfolio/PortfolioSelection";
// import PortfolioLayout from "../pages/portfolio/PortfolioLayout";
import Resume from "../pages/Resume";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onToggleDarkMode() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                isDarkMode={isDarkMode}
                onToggleDarkMode={onToggleDarkMode}
              />
            }
          >
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            {/* <Route path="portfolio" element={<PortfolioSelection />} />
            <Route path="portfolio/*" element={<PortfolioLayout />} /> */}
            <Route path="resume" element={<Resume />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

const lightTheme = {
  backgroundColor: "#FDFAF0",
  color: "#FB9C4C",
  primary: "#B14B1C",
  secondary: "#EFDFC7",
  infoTitle: "#215623",
  infoBody: "#E8F4D0",
};

const darkTheme = {
  backgroundColor: "#E37F51",
  color: "#FDFAF0",
  primary: "#EFDFC7",
  secondary: "#B14B1C",
  infoTitle: "#E8F4D0",
  infoBody: "#215623",
};

export default App;
