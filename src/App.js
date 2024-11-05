import logo from './logo.svg';
import './App.css';
import InputShortner from './InputShortner';
import BackgroundAnimate from './BackgroundAnimate';
import ShortenedUrl from './ShortenedUrl';

function App() {
  return (
    <div className="App">
      <InputShortner />
      <BackgroundAnimate />
      <ShortenedUrl />
    </div>
  );
}

export default App;
