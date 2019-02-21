import React, { Component } from "react";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import Items from "./Items";

class App extends Component {
  render() {
    return <Items />;
  }
}

export default DragDropContext(HTML5Backend)(App);
