import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";


import React, { Component } from 'react'

export class App extends Component {
  render() {
    return (
      <div>
        <BurgerBuilder/>
      </div>
    )
  }
}




export default App;
