import React from 'react'
import './Title.css'
export default function Title() {

    return (
        <div className="title">
            <ul className="title-list">
                <li className="title-list-item"><h1>CHUCK</h1></li>
                <li className="title-list-item"><img className="title-list-item-logo" src="https://assets.chucknorris.host/img/avatar/chuck-norris.png" alt="chuck"/></li>
                <li className="title-list-item"><h1>Norris</h1></li>
            </ul>
        </div>
    )
}
