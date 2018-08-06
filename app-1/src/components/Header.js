import React, {Component} from 'react';

class Header extends Component{
    constructor(props){
        super(props)
        this.state= {
            title:''
        }
    }

    handleUpdateTitle(val){
        this.setState({title:val})
    }

    render(){
        return(
            <div>
                <h3> { this.state.title } </h3>
                <input placeholder="Enter your title" onChange={(e)=> {this.handleUpdateTitle(e.target.value)}} />
            </div>
        )
    }
}

export default Header;