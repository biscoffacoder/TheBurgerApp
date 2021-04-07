import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";


import React, { Component } from 'react'
import Toolbar from "./components/Navigation/Toolbar/Toolbar";
import SideDrawer from "./components/Navigation/SideDrawer/SideDrawer";

export class App extends Component {
  render() {
    return (
      <div>
        
        <Toolbar />
        <SideDrawer/>
        <BurgerBuilder />
      </div>
    )
  }
}




export default App;
