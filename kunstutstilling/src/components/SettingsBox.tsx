import React from 'react';
import ShowFavorites from './ShowFavorites'
import ThemeButton from './ThemeButton'

interface Props {
  changeFetch: (count: number) => void
}

let counter = 0;
export default function SettingsBox(props: Props) {

  return (
    <div className="SettingsBox">
      <ShowFavorites active='false'/>
      <button className="PoemButton" onClick={()=>props.changeFetch(counter+=1)}>Generer nye dikt</button>
      <ThemeButton/>
    </div>
  )
}
