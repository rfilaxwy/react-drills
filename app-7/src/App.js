import React, { Component } from 'react';

import './App.css';
import NewTask from './NewTask';
import List from './List'
import Todo from './Todo'

class App extends Component {
  constructor(){
    super();
    this.state={
      taskList:['carrige','blend']
    }
    this.handleAddTask = this.handleAddTask.bind(this);
   
  }
  handleAddTask(task){
    this.setState({taskList:[...this.state.taskList,task]})
  }

  render() {
    return (
      <div className="App">
      <h1>My list of things</h1>
        < NewTask add={this.handleAddTask} />
        < Todo list={this.state.taskList} />
        < List list={this.state.taskList} />
      </div>
    );
  }
}

export default App;
