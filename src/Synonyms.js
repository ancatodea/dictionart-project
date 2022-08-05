import React from "react";


export default function Synonyms (porps) {
  if (porps.synonyms) {
    return(
    <div className="Synonyms">
      <ul className="Synonyms">
        {porps.synonyms.map(function(synonym, index){
          return <li key={index}>{synonym}</li>
        })}
      </ul>
    </div>
  );
  } else {
    return null;
  }
  
}