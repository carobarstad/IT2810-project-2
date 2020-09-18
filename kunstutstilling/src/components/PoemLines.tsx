import React from 'react';
interface Props {
    poems: any,
}

interface Poem {
    title: string,
    author: string,
    lines: [],
    linecount: number
}

const PoemLines = (props: Props) => {
  const { poems } = props;
  if (!poems) return <p>No poems, sorry</p>;

  const content =  <div>
  {Object.keys(poems).map((poem: string, i: number) => {
  return (
    <li key={i}>
      <span>{poems.lines} </span>
    </li>
  );
})}

</div>
  return <>{content}</>
};
export default PoemLines;