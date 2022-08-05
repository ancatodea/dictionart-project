import React from "react";


export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      {props.phonetic.text}
       <br />
      <a href={[props.phonetic.audio]} rel="noreferrer">Listen</a>
    </div>
  );
}