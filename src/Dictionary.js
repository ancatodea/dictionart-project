import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css"
import Photos from "./Photos";

export default function Dictionary (props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results,setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }
  
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
    let pexelsApiKey = "563492ad6f91700001000001ac80faabe264403f8c5137b63d9aad23";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let header = {"Authorization": `Bearer ${pexelsApiKey}`};
    axios.get(pexelsApiUrl,{headers: header}).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    
  }

  function load() {
    setLoaded(true);
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  if (loaded) {

	return (
		<div className="Dictionary">
      <section>
			<form onSubmit={handleSubmit}>
        <input 
        type="search" onChange={handleKeywordChange} />
      </form>
      <div className="hint">
        suggested words: dance,color,sunrise,garden...
      </div>
      </section>
      <Results results={results} />
      <Photos photos={photos} />
		</div>
	);
  } else {
    load();

  }

}