import React from 'react';
import Toggle from './Toggle';
import ShowFavorites from './ShowFavorites'

interface Props {
  changeFetch: (count: number) => void
}

let counter = 0;
export default function SettingsBox(props: Props) {

  return (
    <div className="SettingsBox">
      <Toggle />
      <ShowFavorites active='false'/>
      <button onClick={()=>props.changeFetch(counter+=1)}>Generer nye dikt</button>
    </div>
  )
}
