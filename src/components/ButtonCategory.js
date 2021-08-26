import React from 'react'
import axios from 'axios'

export default function ButtonCategory(props) {

    const onClickHandler = ()=>{
        axios
            .get(`/joke/category/${props.getSelected}`)
            .then((res) => {
                console.log("In Category button selected is: ")
                console.log(props.getSelected)
                props.onSetJoke(res.data)
                console.log("server response was")
                console.log(res)
            })
            .catch((err) => console.log("not found"));
    }
    return (
        <div>
            <button 
            onClick={onClickHandler}
            className="btn" 
            type="button">Category Joke</button>
        </div>
    )
}
