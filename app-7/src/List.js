import React from 'react';
import Todo from './Todo';

export default function List(props){
    const list = props.list.map((ele, index)=>
{ return(
    <Todo key={index} task={ele} />
)
})
return(
    <div>
        {list}
    </div>
)
}