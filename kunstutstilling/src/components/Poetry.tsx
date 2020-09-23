import React, { Component, useEffect, useState } from "react";
import PoemLines from "./PoemLines";

interface Props {
  loading: boolean;
  poetry: [];
}

type poetryItem = {
  title: string,
  author: string,
  lines: [],
  linecount: number
}

function Poetry<Props>() {
  const [appState, setAppState] = useState({
    loading: true,
    poetry : [],
  });

  const getRandom = (poems:any) => {
    var i;
    let rPoems : any = [];
    for (i = 0; i < 6; i++) {
      rPoems.push(poems[Math.floor(Math.random()*poems.length)])
    }
    return rPoems;
  }



  useEffect(() => {
    const apiUrl = `https://poetrydb.org/author/Emily%20Dickinson`;
    const fetchAPI = async () => {
      fetch(apiUrl)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setAppState({ loading: false, poetry: getRandom(response[0])});
      }).catch(err => console.log(err));
    } 
    fetchAPI();
  }, []);

  return (
    <>
      <PoemLines poem={appState.poetry} />
    </>
  );
}

export default Poetry;
