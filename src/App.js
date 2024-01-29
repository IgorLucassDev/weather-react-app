import logo from './logo.svg';
import './App.css';
import Weather from './components/Weather';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav siteName={'Weather'}/>
      <Weather/>
    </div>
  );
}

export default App;
