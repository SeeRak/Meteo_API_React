import './App.css';
import { Search } from './components/Search';
import { WeatherCard } from './components/WeatherCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Meteo</h1>
      </header>

      <Search />
    </div>
  );
}

export default App;
