import React,  {Component} from 'react';
import Todo from './Todo';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      tasks:['code','eat'],
      newTask:''
    }
    this.handleAddTask =this.handleAddTask.bind(this);
  }
  handleNewtask(task){
    this.setState({newTask:task});
  }
  handleAddTask(){
    this.setState({
      tasks:[...this.state.tasks,this.state.newTask],
      newTask:''
    });
  }
  
  render() {
    let list = this.state.tasks.map((task,index)=>{
      return(
      <Todo key={index} task={task} />
      )
    })
    return (
      <div className="App">
      <h1>Tasks to do</h1>
        <input
          value={this.state.newTask}
          placeholder="New Task"
          onChange={(e)=>this.handleNewtask(e.target.value)}
          ></input>  
            <button onClick={this.handleAddTask}>Add task</button>
            <br/>
          {list}
      </div>
    );
  }
}

export default App;
