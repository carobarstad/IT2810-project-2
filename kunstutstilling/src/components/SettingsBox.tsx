import React from 'react';
import ShowFavorites from './ShowFavorites'
import ThemeButton from './ThemeButton'

interface Props {
  changeFetch: (count: number) => void
}

let counter = 0;
/**
 * Component that encases all the settings buttons. 
 * @param props: defined in interface
 */
export default function SettingsBox(props: Props) {

  return (
    <div className="SettingsBox">
      <ShowFavorites active='false'/>
      <button className="SettingsButton" onClick={()=>props.changeFetch(counter+=1)}>Generate new poems</button>
      <ThemeButton/>
    </div>
  )
}
