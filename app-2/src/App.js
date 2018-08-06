import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(){
    super()
    this.state = {
      foods: ['donair','poutine','scallops','sushi','burgers','halibut butts']
    }
  }
  
  render() {

    const foodList = this.state.foods.map((x)=>
      {
        return(
        <h2> {x} </h2>
        )
    })

    return (
      <div className="App">
        

          {foodList}

        
      </div>
    );
  }
}

export default App;
