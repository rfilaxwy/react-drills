import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      listy: ['family','gym','read','code','cook','climb'],
      filterstr: ''
    }
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(val){
      this.setState({filterstr:val})
     
  }

  render() {
    let listItems = this.state.listy.filter( (ele, index) => {
      return ele.includes( this.state.filterstr );
    }).map(( element, index) => { 
      return <h2 key={index}>{element}</h2>
    })
    

    
    return (

      <div className="App">
        <input placeholder='Filter list' onChange={(e)=>{this.handleFilter(e.target.value)}} />
        <div>
          
          {listItems}
          
          
        </div>

      </div>
    );
  }
}

export default App;
