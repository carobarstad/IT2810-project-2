import React from 'react';
import Header from './components/Header';
import DisplayBox from './components/DisplayBox';
import SettingsBox from './components/SettingsBox';
import './css/components.css';
import OpeningScreen from './components/OpeningScreen';



export default function App() {
  
  return (
    <>
      <OpeningScreen />
      <div id="colorPallette" className='lightMode'>
      <div className='Wrapper'>
          <Header/>
          <div className='WrapperInnerContainer'>
            <SettingsBox/>
            <DisplayBox/>
          </div>
      </div>
      <footer><p>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> </p></footer>
      </div>
    </>
  )
}
