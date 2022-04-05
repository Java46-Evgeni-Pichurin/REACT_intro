import React from 'react';
import './App.css';
import Timer from './components/Timer';

function App() {
  return (
    <div style={{ gridRow: `auto` }}>
      <div><Timer timeZone='Turkey' timeFormat={`tr`} interval={1000} /></div>
      <div><Timer timeZone='Europe/London' timeFormat={`en-gb`} interval={1000} /></div>
      <div><Timer timeZone='Asia/Hong_Kong' timeFormat={`zh-hk`} interval={1000} /></div>
      <div><Timer timeZone='America/Los_Angeles' timeFormat={`en-us`} interval={1000} /></div>
      <div className='App-logo'>
        <img src="https://avatanplus.com/files/resources/original/5b50477054937164b1970eda.png" alt='NO IMAGE' style={{height: `250px`}}></img>
      </div>
      <div style={{ marginTop: `10vw`, textAlign: `center` }}>
        <label >Check the data at the following links:</label>
        <a className='App-link' href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones" style={{ margin: `1vw` }}>Time Zone</a>
        <a className='App-link' href="https://www.andiamo.co.uk/resources/iso-language-codes/" style={{ margin: `1vw` }}>Time Format</a>
      </div>
    </div>
  )
}
export default App;