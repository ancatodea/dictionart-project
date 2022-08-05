import React from "react";
import Synonyms from "./Synonyms";


export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function(definition, index){
        if (index < 1){
          return (
          <div key={index}>
            <p> <strong>Definition:</strong>
              {definition.definition}
            </p>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
        }else {
          return null;
        }
      })}
    </div>
  );
}