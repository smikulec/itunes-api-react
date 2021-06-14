import React, { useState } from "react";

export default function SearchForm(props) {
  const [state, setState] = useState({ name: "" });

  const handleChange = (event) => {
    setState({ name: event.target.value });
    props.onInputEntry(state.name);
  };

  return (
    <form className="form-container">
      <input
        className="input-field"
        name="name"
        type="text"
        onChange={handleChange}
        value={state.name}
        placeholder="what are you looking for?"
      />
    </form>
  );
}
