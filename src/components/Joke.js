import React from 'react'
import './Joke.css'
export default function Joke(props) {
    let titleContent = 'Category'
    if(props.getSelected !== ''){
        titleContent = props.getSelected;
    }
    return (
        <div className="joke">
            <h2 className="joke-title"> 
                {titleContent}
            </h2>
            <p className="joke-content">
                {props.getJoke}
            </p>
        </div>
    )
}
