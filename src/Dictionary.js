import React, { useState } from "react";

export default function Dictionary() {
  let [headword, setHeadword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${headword} definition`);
  }

  function updateHeadword(event) {
    setHeadword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={updateHeadword} />
      </form>
    </div>
  );
}
