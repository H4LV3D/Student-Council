import React from "react";
import "./Styles/index.css";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { pageData } from "./Data/SiteData";
import SitePage from "./Pages/SitePage";

function App() {
  const data = pageData.map((element) => {
    return {
      link: element.link,
      title: element.title,
      heroText: element.heroText,
      sectionText: element.sectionText,
    };
  });

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          {pageData.map((element, index) => {
            return (
              <Route
                path={element.link}
                element={<SitePage siteDetails={data[index]} />}
                key={index}
              />
            );
          })}
        </Routes>
      </Router>
    </>
  );
}

export default App;
