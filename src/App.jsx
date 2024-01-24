import React from "react";
import HeaderContainer from "./components/container/HeaderContainer.jsx";
import MainContainer from "./components/container/MainContainer.jsx";
import FooterContainer from "./components/container/FooterContainer.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchContent: "",
    };

    this.onSearchInputHandler = this.onSearchInputHandler.bind(this);
  }

  onSearchInputHandler(query) {
    this.setState({
      searchContent: query.target.value,
    });
  }

  render() {
    return (
      <>
        <HeaderContainer
          query={this.state.searchContent}
          onInput={this.onSearchInputHandler}
        />
        <MainContainer searchContent={this.state.searchContent} />
        <FooterContainer />
      </>
    );
  }
}

export default App;

