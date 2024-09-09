import React,{useState} from 'react';
import {createPortal} from 'react-dom';

export default function List(){
    const [list,setList]=useState(["Apple","Mango","Banana","Pineapple"])
    return createPortal (
        <div style={{textAlign:'center'}}>
            <h3>Collection of Fruits</h3>
            {list.map((item,ind)=>(
                <div key={ind}>{item}</div>
            ))}
        </div> , document.getElementById("portal")
    )
}