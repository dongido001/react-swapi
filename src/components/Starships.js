import React, { useState, useEffect } from 'react';
import Starship from "./Starship";
import axios from "axios";

export default function Starships() {
  const [starships, setStarships] = useState([]);
  const [count, setCount] = useState(0);
  const [next, setNext] = useState(`https://swapi.co/api/starships`);
  const [previous, setPrevious] = useState(null);

  const getStarships = (page=1) => {
    (async () => {
        const {data} =  await axios.get(page);
        if (data) {
            const {count, next, previous, results} = data
            setCount(count)
            setNext(next)
            setPrevious(previous)
            setStarships(results)
        }
    })()  
  }

  useEffect(() => {
    getStarships(next)
  }, []);

  return (
    <div className="starship-container">
      <div className="starships"> 
          { starships.map( (starship, index) => <Starship starship={starship} key={index} /> ) }
      </div>

      <div className="navigation-container"> 
        <button 
            className="previous" 
            onClick={ () => getStarships(previous) }
            disabled={!previous ? true : false}
         >
            Previous
        </button>
        <button 
            className="next" 
            onClick={ () => getStarships(next) }
            disabled={ !next ? true : false }
        >
            Next
        </button>
      </div>
    </div>
  );
}