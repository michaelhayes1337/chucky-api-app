import React from 'react'
import axios from 'axios'
export default function ButtonRandom(props) {
    const onClickHandler= ()=>{
        axios
          .get("joke/random/")
          .then((res) => {
              console.log("in random button server response is: ")
            props.onSetJoke(res.data)
            console.log(res)
          })
          .catch((err) => console.log("err"));
          props.onSetSelected('Random')
    }
    return (
        <div>
            <button 
            className="btn" 
            onClick={onClickHandler}
            type="button">
                Random Joke
            </button>
        </div>
    )
}
