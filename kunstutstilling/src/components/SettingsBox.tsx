import React from 'react';
import ShowFavorites from './ShowFavorites'
import ThemeButton from './ThemeButton'

export default function InfoBox() {
  return (
    <div className="SettingsBox">
      <ShowFavorites active='false'/>
      <ThemeButton/>
    </div>
  )
}
