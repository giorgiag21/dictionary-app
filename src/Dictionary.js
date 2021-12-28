import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [headword, setHeadword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${headword}`;
    axios.get(apiUrl).then(handleResponse);
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
    </div>
  );
}
