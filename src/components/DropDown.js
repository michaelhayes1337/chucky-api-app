import React from "react";
import './DropDown.css'
export default function DropDown(props) {
    const onChangeHandler = (event)=>{
        console.log('in dropdown')
        props.onSetSelected(event.target.value)
    }
  return (
    <div className="dropdown">
      <label className="dropdown-label">Choose a category:</label>
      <select className="dropdown-options" onChange={onChangeHandler}>
          {
              props.categories.map((category)=>{
                return(
                    <option 
                    key={Math.random().toString()} 
                    className="dropdown-item" 
                    value={category}>{category}
                    </option>
                )
              })
        }
      </select>
    </div>
  );
}
