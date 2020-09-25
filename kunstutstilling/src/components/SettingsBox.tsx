import React from 'react';
import Toggle from './Toggle';
import ShowFavorites from './ShowFavorites'
import ThemeButton from './ThemeButton'

export default function InfoBox() {
  return (
    <div className="SettingsBox">
      <Toggle />
      <ShowFavorites active='false'/>
      <ThemeButton/>
    </div>
  )
}
