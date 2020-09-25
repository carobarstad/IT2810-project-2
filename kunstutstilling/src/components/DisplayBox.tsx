import React, { useState, useEffect } from 'react'
import ArtworkBox from './ArtworkBox'
import PortraitToggleButton from './PortraitToggleButton';

type poetryItem = {
  title: string,
  author: string,
  lines: string[],
  linecount: string
}

export default function DisplayBox() {
  const [appState, setAppState] = useState({
    loading: true,
    poetry: [
      {
        title: "Loading poems...",
        author: "No author",
        lines: ["Loading poems..."],
        linecount: "0",
      },
    ],
  });



  // const getRandom = (poems: any) => {
  //   let i;
  //   let rPoems: any = [];
  //   poetryItem rPoem;
  //   while (rPoems.length < 6) {
  //     rPoem = poems[Math.floor(Math.random() * poems.length)]
  //     console.log(i)
  //     if (rPoems.linecount <= 10) {
  //       rPoems.push(rPoem);}
  //   }
  //   return rPoems;
  // };

  
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


    return (
      
      <div className="DisplayBoxOuterContainer">
        <div className="DisplayTop">
            <h2 className="Tittel">Kunstutstilling</h2> 
            <PortraitToggleButton />
          </div>

          {/* Render if poemDB hasn't loaded */}
      {appState.loading && (
        <div className="DisplayBox">
          <ArtworkBox
            poetry={appState.poetry[0]}
            imgNr={1}
            identifier="1"
            liked={localStorage.getItem("artwork1")}
            image=""
          />
          <ArtworkBox
            poetry={appState.poetry[0]}
            imgNr={2}
            identifier="2"
            liked={localStorage.getItem("artwork2")}
            image=""
          />
          <ArtworkBox
            poetry={appState.poetry[0]}
            imgNr={3}
            identifier="3"
            liked={localStorage.getItem("artwork3")}
            image=""
          />
          <ArtworkBox
            poetry={appState.poetry[0]}
            imgNr={4}
            identifier="4"
            liked={localStorage.getItem("artwork4")}
            image=""
          />
          <ArtworkBox
            poetry={appState.poetry[0]}
            imgNr={5}
            identifier="5"
            liked={localStorage.getItem("artwork5")}
            image=""
          />
          <ArtworkBox
            poetry={appState.poetry[0]}
            imgNr={6}
            identifier="6"
            liked={localStorage.getItem("artwork6")}
            image=""
          />
        </div>
      )}
      {/* Render if poetryDB had loaded */}
      {!appState.loading && (
        <div className="DisplayBox">
          <ArtworkBox
            poetry={appState.poetry[0]}
            imgNr={1}
            identifier="1"
            liked={localStorage.getItem("artwork1")}
            image=""
          />
          <ArtworkBox
            poetry={appState.poetry[1]}
            imgNr={2}
            identifier="2"
            liked={localStorage.getItem("artwork2")}
            image=""
          />
          <ArtworkBox
            poetry={appState.poetry[2]}
            imgNr={3}
            identifier="3"
            liked={localStorage.getItem("artwork3")}
            image=""
          />
          <ArtworkBox
            poetry={appState.poetry[3]}
            imgNr={4}
            identifier="4"
            liked={localStorage.getItem("artwork4")}
            image=""
          />
          <ArtworkBox
            poetry={appState.poetry[4]}
            imgNr={5}
            identifier="5"
            liked={localStorage.getItem("artwork5")}
            image=""
          />
          <ArtworkBox
            poetry={appState.poetry[5]}
            imgNr={6}
            identifier="6"
            liked={localStorage.getItem("artwork6")}
            image=""
          />
        </div>
      )}
    </div>
  );
}
