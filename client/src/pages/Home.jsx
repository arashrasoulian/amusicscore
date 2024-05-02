import { useEffect, useState } from "react";

import { API_URL } from "../consttants";

export function Home(){
  const [scores ,setScores] =useState([ ])

  useEffect(()=>{
    async function loadscores(){
      try {
        const response = await fetch("http://localhost:3000/api/v1/scores");
        console.log(API_URL);
        if (response.ok) {
          const json = await response.json();
          setScores(json);
          console.log(scores);
        }else {
          throw response
        }
      }catch(e){
        console.log(e);
      }
    }
  loadscores();
},[])
  return (
   <div>
    <div className="homepage-slider">
    </div>
    <div className="foryou-homepage-container">
      {scores.map((score)=>(

        <div key={score.id}>
          <h2>{score.name}</h2>
          <p>{score.arranger}</p>
        </div>

      ))}
    </div>
   </div>
  )
}
