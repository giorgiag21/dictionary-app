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
      <form onSubmit={search}>
        <input type="search" onChange={updateHeadword} />
        <Results results={results} />
      </form>
    </div>
  );
}
