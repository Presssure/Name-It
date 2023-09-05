import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SearchBox from "./components/SearchBox/SearchBox";
import ResultsContainer from "./components/ResultsContainer/ResultsContainer";

const name = require("@rstacruz/startup-name-generator");

const App = () => {
  const headerText = "Name It!";
  const [headerExpanded, setHeaderExpanded] = useState(true);
  const [suggestedNames, setSuggestedNames] = useState([]);

  const handleInputChange = (input) => {
    setHeaderExpanded(!input);
    setSuggestedNames(input ? name(input) : []);
  };

  return (
    <div>
      <Header headerExpanded={headerExpanded} headTitle={headerText} />
      <SearchBox onInputChange={handleInputChange} />
      <ResultsContainer suggested={suggestedNames} />
    </div>
  );
};

// class App extends React.Component {
//   state = {
//     headerText: "Name It!",
//     headerExpanded: true,
//     suggestedNames: [],
//   };

export default App;
