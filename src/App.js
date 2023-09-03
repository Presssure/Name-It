import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SearchBox from "./components/SearchBox/SearchBox";
import ResultsContainer from "./components/ResultsContainer/ResultsContainer";

const name = require("@rstacruz/startup-name-generator");

class App extends React.Component {
  state = {
    headerText: "Name It!",
    headerExpanded: true,
    suggestedNames: [],
  };

  handleInputChange = (input) => {
    this.setState({
      headerExpanded: !(input.length > 0),
      suggestedNames: input ? name(input) : [],
    });
  };

  render() {
    return (
      <div>
        <Header
          headerExpanded={this.state.headerExpanded}
          headTitle={this.state.headerText}
        />
        <SearchBox onInputChange={this.handleInputChange} />
        <ResultsContainer suggested={this.state.suggestedNames} />
      </div>
    );
  }
}

export default App;
