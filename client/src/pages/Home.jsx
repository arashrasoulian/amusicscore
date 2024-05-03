import { useEffect, useState } from "react";

import { API_URL } from "../consttants";
import { List } from "../components/List";

export function Home(){
  const [scores ,setScores] =useState([{}])

  useEffect(()=>{
    async function loadscores(){
      try {
        const response = await fetch(API_URL+"/scores");
        if (response.ok) {
          const json = await response.json();
          setScores(json);
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
    <List scores={scores}/>
   </div>
  )
}
