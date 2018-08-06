import React, {Component} from 'react';

class List extends Component{
    constructor(props){
        super(props)
    }
    render(){
    const food = props.list;
    const foodList = food.map((x)=>
        <li key={x.toString()}>
            <h2>{x}</h2>
        </li>
        );


    
        return(
            <div>
                
                <ul>
                    {foodList}
                </ul>


            </div>
        )
    }
}

export default List;