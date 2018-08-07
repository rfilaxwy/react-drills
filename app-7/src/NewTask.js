import React, {Component} from 'react';

class NewTask extends Component {
    constructor(){
        super();

        this.state = {
            input:''
        };

        this.handleAdd = this.handleAdd.bind(this)
    }
    handleTask( val ){
        this.setState({input:val})
    }
    handleAdd(){
        this.props.add(this.state.input);
        this.setState({ input: '' });
    }

    render(){
        return(
            <div>
            <input 
                value={this.state.input}
                placeholder='Enter a new thing'
                onChange={ (e) => {this.handleTask(e.target.value)}}></input>
            <button onClick={this.handleAdd} >Add</button>
            </div>
        )

    }
    
}
export default NewTask