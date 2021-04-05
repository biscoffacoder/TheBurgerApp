import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";


import React, { Component } from 'react'
import Toolbar from "./components/Navigation/Toolbar/Toolbar";

export class App extends Component {
  render() {
    return (
      <div>
        <Toolbar/>
                <BurgerBuilder/>
      </div>
    )
  }
}




export default App;
