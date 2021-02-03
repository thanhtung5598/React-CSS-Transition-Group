import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./App.css";

class App extends Component {
  state = {
    items: ["Click", "To", "Remove", "An", "Item"],
    inputText: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.inputText],
      inputText: "",
    });
  };

  renderItems() {
    return this.state.items.map((item, i) => {
      return (
        <CSSTransition key={i} appear={true} timeout={500} classNames="AppExp">
          <div className="item" key={i} onClick={() => this.removeItem(i)}>
            {item}
          </div>
        </CSSTransition>
      );
    });
  }

  handleChange = (event) => {
    this.setState({ inputText: event.target.value });
  };

  removeItem(i) {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({
      items: newItems,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="Animation-App">
          <form onSubmit={this.handleSubmit}>
            <input
              placeholder="Enter new Item"
              type="text"
              onChange={this.handleChange}
              value={this.state.inputText}
            />
            <input type="submit" value="Add new Item" />
          </form>
          <TransitionGroup>
            {this.renderItems()}
          </TransitionGroup>
        </div>
      </div>
    );
  }
}

export default App;
