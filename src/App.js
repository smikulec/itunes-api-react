import React, { useState, useEffect } from "react";
import ShowResults from "./components/ShowResults";
import SearchForm from "./components/SearchForm";
import "./styles.css";

export default function App() {
  const [inputState, setInputState] = useState(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const inputHandler = (input) => {
    setInputState(input);
  };

  useEffect(() => {
    if (inputState === null) {
      return;
    }
    fetch(`https://itunes.apple.com/search?term=${inputState}&entity=song`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
      .then((json) => {
        setData(json);
        setError(null);
      })
      .catch((error) => setError(error));
  }, [inputState]);

  return (
    <div className="main-div">
      <SearchForm onInputEntry={inputHandler} />
      <ShowResults data={data} error={error} />
    </div>
  );
}
