import React, { useState, useEffect} from 'react'
import Header from './components/Header';
import DisplayBox from './components/DisplayBox';
import SettingsBox from './components/SettingsBox';
import './css/components.css';
import OpeningScreen from './components/OpeningScreen';

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

  const getRandom = (poems: any) => {
    let i;
    let rPoems: any = [];
    for (i = 0; i < 6; i++) {
      rPoems.push(poems[Math.floor(Math.random() * poems.length)]);
    }
    return rPoems;
  };

  useEffect(() => {
    const apiUrl = `https://poetrydb.org/author/Emily%20Dickinson`;
    const fetchAPI = async () => {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          setAppState({ loading: false, poetry: getRandom(response) });
        })
        .catch((err) => console.log(err));
    };
    fetchAPI();
  }, []);
  // END: Code to fetch poems from API

  return (
    <>
      <OpeningScreen />
      <div id="colorPallette" className='lightMode'>
      <div className='Wrapper'>
          <Header/>
          <div className='WrapperInnerContainer'>
            <SettingsBox/>
            <DisplayBox poetry={appState.poetry} loading={appState.loading}/>
          </div>
      </div>
      <footer><p>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> </p></footer>
      </div>
    </>
  )
}
