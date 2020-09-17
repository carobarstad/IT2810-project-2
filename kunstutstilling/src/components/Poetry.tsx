import React, { Component, useEffect, useState } from 'react'
import PoemLines from './PoemLines';

interface Props {
    loading: boolean,
    poetry: object,
}

function Poetry<Props>() {
    const [appState, setAppState] = useState({
      loading: true,
      poetry: {},
    });
  
    useEffect(() => {
     /* setAppState({ loading: true });*/
      const apiUrl = `https://poetrydb.org/author/Emily%20Dickinson`;
      fetch(apiUrl)
        .then((response) => response.json())
        .then((response) => {
            response.forEach((poem: any) => {
                setAppState({ loading: false, poetry: poem })})
        })
    }, [setAppState]);

    return (
        <div>
          <PoemLines poems={appState.poetry} />
        </div>
    );
  }

  export default Poetry;