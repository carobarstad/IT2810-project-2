import React from "react";
import ArtworkBox from "./ArtworkBox";
import PortraitToggleButton from "./PortraitToggleButton";

type poetryItem = {
  title: string;
  author: string;
  lines: string[];
  linecount: string;
};

interface Props {
  poetry: poetryItem[];
  loading: boolean;
}
export default function DisplayBox(props: Props) {
  return (
    <div className="DisplayBoxOuterContainer">
      <div className="DisplayTop">
        <div>
          <h2 className="Tittel">Fruits &amp; literature</h2>
          <p>This exhibition is a combination of animation, sound and poetry.</p>
          <p>The poems are written by wonderful Emily Dickinson.</p>
        </div>
        <PortraitToggleButton />
      </div>

      {/* Render if poemDB hasn't loaded */}
      {props.loading && (
        <div className="DisplayBox">
          <ArtworkBox
            poetry={props.poetry[0]}
            imgNr={1}
            identifier="1"
            liked={localStorage.getItem("artwork1")}
            image=""
          />
          <ArtworkBox
            poetry={props.poetry[0]}
            imgNr={2}
            identifier="2"
            liked={localStorage.getItem("artwork2")}
            image=""
          />
          <ArtworkBox
            poetry={props.poetry[0]}
            imgNr={3}
            identifier="3"
            liked={localStorage.getItem("artwork3")}
            image=""
          />
          <ArtworkBox
            poetry={props.poetry[0]}
            imgNr={4}
            identifier="4"
            liked={localStorage.getItem("artwork4")}
            image=""
          />
          <ArtworkBox
            poetry={props.poetry[0]}
            imgNr={5}
            identifier="5"
            liked={localStorage.getItem("artwork5")}
            image=""
          />
          <ArtworkBox
            poetry={props.poetry[0]}
            imgNr={6}
            identifier="6"
            liked={localStorage.getItem("artwork6")}
            image=""
          />
        </div>
      )}
      {/* Render if poetryDB had loaded */}
      {!props.loading && (
        <div className="DisplayBox">
          <ArtworkBox
            poetry={props.poetry[0]}
            imgNr={1}
            identifier="1"
            liked={localStorage.getItem("artwork1")}
            image=""
          />
          <ArtworkBox
            poetry={props.poetry[1]}
            imgNr={2}
            identifier="2"
            liked={localStorage.getItem("artwork2")}
            image=""
          />
          <ArtworkBox
            poetry={props.poetry[2]}
            imgNr={3}
            identifier="3"
            liked={localStorage.getItem("artwork3")}
            image=""
          />
          <ArtworkBox
            poetry={props.poetry[3]}
            imgNr={4}
            identifier="4"
            liked={localStorage.getItem("artwork4")}
            image=""
          />
          <ArtworkBox
            poetry={props.poetry[4]}
            imgNr={5}
            identifier="5"
            liked={localStorage.getItem("artwork5")}
            image=""
          />
          <ArtworkBox
            poetry={props.poetry[5]}
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
