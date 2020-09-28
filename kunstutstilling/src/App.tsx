import React, { useState, useEffect } from "react";
import OpeningScreen from "./components/OpeningScreen";
import SettingsBox from "./components/SettingsBox";
import DisplayBox from "./components/DisplayBox";
import FooterBox from "./components/FooterBox";
import "./css/components.css";

export default function App() {
  //Application component for webpage
  const [appState, setAppState] = useState({
    loading: true,
    poetry: [
      {
        title: "Loading poems...",
        author: "Emily Dickinson",
        lines: ["NA"],
        linecount: "0",
      },
    ],
  });

  const [newFetch, setNewFetch] = useState(0);
  const [refreshRender, setRefreshRender] = useState(
    sessionStorage.getItem("visited") === "true"
  );

  const getRandom = (poems: any) => {
    let rPoems: any = [];
    while (rPoems.length < 6) {
      rPoems.push(poems[Math.floor(Math.random() * poems.length)]);
      if (rPoems[rPoems.length - 1].linecount > 10) {
        rPoems.pop();
      }
    }
    return rPoems;
  };

  // Code to fetch poems from API
  useEffect(() => {
    if (refreshRender) {
      //Retrieve poems from session storage instead of fetching new poems on page refresh
      setAppState(JSON.parse(sessionStorage.getItem("poemAppState")!));
      setRefreshRender(false);
    } else {
      setAppState({
        loading: true,
        poetry: [
          {
            title: "Loading poems...",
            author: "Emily Dickinson",
            lines: ["NA"],
            linecount: "0",
          },
        ],
      });
      const apiUrl = `https://poetrydb.org/author/Emily%20Dickinson`;
      const fetchAPI = async () => {
        fetch(apiUrl)
          .then((response) => response.json())
          .then((response) => {
            setAppState({ loading: false, poetry: getRandom(response) });
          })
          .catch((err) => console.log(err));
      };
      fetchAPI();
    }
  }, [newFetch]);
  // END: Code to fetch poems from API

  if (!appState.loading) {
    sessionStorage.setItem("poemAppState", JSON.stringify(appState));
  }

  return (
    <>
      <OpeningScreen />
        <div className="Wrapper">
          <h1>Art exhibition</h1>
          <div className="WrapperInnerContainer">
            <SettingsBox changeFetch={setNewFetch} />
            <DisplayBox poetry={appState.poetry} loading={appState.loading} />
          </div>
        <FooterBox/>
        </div>
    </>
  );
}
