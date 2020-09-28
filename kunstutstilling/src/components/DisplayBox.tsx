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

/**
 * Component that encases the elements of Artworks. 
 * @param props Defined in interface
 */
export default function DisplayBox(props: Props) {
  let counter = ['1','2','3','4','5','6']
  const contentLoading = <div className="DisplayBox">
  {Object.keys(counter).map((counter: string, i: number) => {
    return (
      <ArtworkBox
      poetry={props.poetry[0]}
      imgNr={i+1}
      identifier="i+1"
      liked={localStorage.getItem("artwork" + i+1)}
      image=""
    />
    );
  })}
</div>

const content = <div className="DisplayBox">
  {Object.keys(counter).map((counter: string, i: number) => {
    return (
      <ArtworkBox
      poetry={props.poetry[i]}
      imgNr={i+1}
      identifier="i+1"
      liked={localStorage.getItem("artwork" + i+1)}
      image=""
    />
    );
  })}
</div>

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
      {props.loading && contentLoading}
    
      
      {/* Render if poetryDB had loaded */}
      {!props.loading && content}
    </div>
  );
}