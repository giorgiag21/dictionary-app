import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [headword, setHeadword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${headword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001fd4acf33b06043d083dd1dce7b6e47c2";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${headword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function updateHeadword(event) {
    setHeadword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <div className="search-bar">
        <h2 className="mb-3">What word do you want to look up?</h2>
        <form onSubmit={search}>
          <input type="search" onChange={updateHeadword} />
        </form>
      </div>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
