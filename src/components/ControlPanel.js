import React from 'react'
import ButtonCategory from './ButtonCategory'
import ButtonRandom from './ButtonRandom'
import DropDown from './DropDown'
import './ControlPanel.css'
export default function ControlPanel(props) {
    return (
        <div className="controlpanel">
            <div className="controlpanel-category">
                <DropDown categories={props.categories} onSetSelected={props.onSetSelected}/>
            </div>
            <div className="controlpanel-btns">
                <ButtonCategory onSetJoke={props.onSetJoke} getSelected={props.getSelected}/>
                <ButtonRandom onSetJoke={props.onSetJoke}  onSetSelected={props.onSetSelected} />
            </div>
        </div>
    )
}
