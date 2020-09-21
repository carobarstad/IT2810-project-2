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