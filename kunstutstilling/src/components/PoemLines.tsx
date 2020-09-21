import React from 'react';
interface Props {
    poem: any,
}

interface Poem {
    title: string,
    author: string,
    lines: [],
    linecount: number
}

//const liste = ["ape", "esel", "katt"]
//Skriver liste.map((dyr: string, i: number) => {
    //console.log(dyr) 1. ape, 2. esel, 3. katt
    //return <Dyr type={dyr} key={i} />
//}

// <Dyr type={ape} key={1} />
// <Dyr type={esel} key={2} />
// <Dyr type={katt} key={3} />

const PoemLines = (props: Props) => {
  const { poem } = props;
  
  if (!poem) return <p>No poems, sorry</p>;

  return <div>
      {/* TODO format this and possibly add button to show */}
      {poem.title}
      {poem.lines}
      </div>
};
export default PoemLines;