import * as React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import GraphicPortfolio from "./GraphicPortfolio";
import WebPortfolio from "./WebPortfolio";

function PortfolioLayout() {
  return (
    <div>
      <nav>
        <NavLink to="web">Websites</NavLink>
        <NavLink to="graphic">Graphics</NavLink>
      </nav>

      <Routes>
        <Route path="web" element={<WebPortfolio />} />
        <Route path="graphic" element={<GraphicPortfolio />} />
      </Routes>
    </div>
  );
}

export default PortfolioLayout;
