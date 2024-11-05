import logo from './logo.svg';
import './App.css';
import InputShortner from './InputShortner';
import BackgroundAnimate from './BackgroundAnimate';
import ShortenedUrl from './ShortenedUrl';
import { useState } from 'react';

function App() {
  const [inputValue,setInputValue]=useState("");

  return (
    <div className="App">
      <InputShortner setInputValue={setInputValue}/>
      <BackgroundAnimate />
      <ShortenedUrl inputValue={inputValue} />
    </div>
  );
}

export default App;
