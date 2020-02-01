import React from 'react';
import ProgressBar from "./ProgressBar"

const Capitalize = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1)
}

const ValOrNone = (val) => {
    return +val === 0 ? "None" : val
}

const CalculateProgress = (val) => {
    val = val === "unknown" ? 0 : val
    return ( (val/6) * 100) + "%"
} 

const isProgressBarDisabled = (val) => {
    return val === "unknown"
}

export default function Starship(starship = {}) {
  starship = starship.starship || {}

  return (
    <div className="starship"> 
        <div className="starship-item">
            <div className="name"> Name </div>
            <div className="value"> { Capitalize(starship.name) } </div>
        </div>
        <div className="starship-item">
            <div className="name"> Crew </div>
            <div className="value"> { ValOrNone(starship.crew) } </div>
        </div>
        <div className="starship-item">
            <div className="name"> passenger </div>
            <div className="value"> { ValOrNone(starship.passengers) } </div>
        </div>
        <div className="starship-item">
            <div className="name"> Hyperdrive Class </div>
            <div className="value" style={{"marginTop": '8px'}}>
                <ProgressBar 
                    progress={ CalculateProgress(starship.hyperdrive_rating) } 
                    disabled={ isProgressBarDisabled(starship.hyperdrive_rating) } 
                />
            </div>
        </div>
    </div>
  );
}