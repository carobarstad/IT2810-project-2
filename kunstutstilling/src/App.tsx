import React, { useState, useEffect } from "react";
import DisplayBox from "./components/DisplayBox";
import SettingsBox from "./components/SettingsBox";
import "./css/components.css";
import OpeningScreen from "./components/OpeningScreen";

export default function App() {
  // Code to fetch poems from API
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
  const [refreshRender, setRefreshRender] = useState(sessionStorage.getItem('visited') === 'true')

  const getRandom = (poems: any) => {
    let i;
    let rPoems: any = [];
    while (rPoems.length < 6) {
      rPoems.push(poems[Math.floor(Math.random() * poems.length)]);
      if (rPoems[rPoems.length - 1].linecount > 10) {
        rPoems.pop();
      }
    }
    return rPoems;
  };

  useEffect(() => {
    if(refreshRender){
      // Hent inn dikt fra sessionStorage fremfor å hente nye fra DB:
      console.log('Kommer meg inn i loopen')
      setAppState(JSON.parse(sessionStorage.getItem('poemAppState')!))
      console.log(JSON.stringify(appState))
      setRefreshRender(false)
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
    
    if(!(appState.loading)){
      sessionStorage.setItem('poemAppState',JSON.stringify(appState))
    }

    return (
      <>
        <OpeningScreen />
        <div className="Wrapper">
          <h1>Kunstutstilling</h1>
          <div className="WrapperInnerContainer">
            <SettingsBox changeFetch={setNewFetch} />
            <DisplayBox poetry={appState.poetry} loading={appState.loading} />
          </div>
        </div>
        <footer className="footer">
          <p>
            Icons made by{" "}
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>{" "}
          </p>
        </footer>
      </>
    )
}
