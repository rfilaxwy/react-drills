import React, {Component} from 'react';


class Login extends Component{
    constructor(props){
        super(props)
        this.state ={
            username:'',
            password:''
        }
        this.handlePassword =this.handlePassword.bind(this);
        this.handleUsername =this.handleUsername.bind(this);
        this.logged =this.logged.bind(this);
    }
    handleUsername(val){
        
        this.setState({username:val})

    }
    handlePassword(val){
        this.setState({username:val})

    }

    logged(){
        console.log(`The user ${this.state.username} has logged in with password ${this.state.password}`)
    }
    render(){
        return(
            <div>
                <input 
                    placeholder='Username'
                    onChange={(e)=>{this.handleUsername(e.target.value)}}
                    ></input>
                <input
                    placeholder='Password'
                    onChange={(e)=>{this.handlePassword(e.target.value)}}
                    ></input>
                <button 
                    onClick={this.logged}
                >Login</button>

            </div>
        )
    }
}
export default Login;