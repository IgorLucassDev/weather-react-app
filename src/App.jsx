import './App.css';
import Weather from './components/weather/Weather';

const App = () => {
  return (
    <div className="App">
      <div className="titleContainer">
        <h1>Weather View</h1>
      </div>
      <div className="content">
        <Weather/>
      </div>
    </div>
  );
}

export default App;
