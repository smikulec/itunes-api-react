import React from "react";

export default function ShowResults(props) {
  if (props.data === null) {
    return null;
  }

  if (props.error !== null) {
    return <h1>An error occurred, please try again later.</h1>;
  }

  if (props.data.resultCount === 0) {
    return (
      <h1>
        We couldn't find anything matching your search. Try something else?
      </h1>
    );
  }

  const results = props.data.results;

  const listItem = results.map((element) => {
    return (
      <li className="list-item" key={(element.artistId, element.trackId)}>
        <div>Artist: {element.artistName}</div>
        <div>Song: {element.trackName}</div>
      </li>
    );
  });

  return <ul className="list-container">{listItem}</ul>;
}
