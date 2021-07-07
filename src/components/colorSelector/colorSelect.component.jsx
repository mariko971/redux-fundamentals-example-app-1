import React from 'react';
import { useDispatch } from 'react-redux';

const ColorCoder = (props)=>{
    const dispatch = useDispatch()

    const colorChanged =(e)=> dispatch({type:'todos/colorSelected' , payload:{color:e.target.value, id:props.id} })
    return (
      <select className="colorCode" value={props.color} onChange={colorChanged}>
        <option></option>
        <option>Green</option>
        <option>Blue</option>
        <option>Orange</option>
        <option>Purple</option>
        <option>Red</option>
      </select>
    )
}
export default ColorCoder;