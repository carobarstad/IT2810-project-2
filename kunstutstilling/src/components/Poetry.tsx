import React, { Component, useEffect, useState } from "react";
import { idText } from "typescript";
import PoemLines from "./PoemLines";

interface Props {
  loading: boolean;
  poetry: object;
}

function Poetry<Props>() {
  const [appState, setAppState] = useState({
    loading: true,
    poetry: [],
  });

  const arrays = [];

  useEffect(() => {
    const apiUrl = `https://poetrydb.org/author/Emily%20Dickinson`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((response) => {
        setAppState({ loading: false, poetry: response[0] });
      });
  }, [setAppState]);
  return (
    <div>
      <PoemLines poem={appState.poetry} />
    </div>
  );
}

export default Poetry;
