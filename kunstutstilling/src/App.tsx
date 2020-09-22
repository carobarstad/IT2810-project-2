import React from 'react';
import Header from './components/Header';
import InfoBox from './components/InfoBox';
import DisplayBox from './components/DisplayBox';
import SettingsBox from './components/SettingsBox';
import './components/components.css';
import OpeningScreen from './components/OpeningScreen';



export default function App() {
  
  return (
    <>
      <OpeningScreen />
      <div id="colorPallette" className='lightMode'>
      <div className='Wrapper'>
          <Header/>
          <div className='WrapperInnerContainer'>
            <DisplayBox/>
            <SettingsBox/>
            </div>
      </div>
      </div>
    </>
  )
}