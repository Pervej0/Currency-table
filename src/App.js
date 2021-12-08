import logo from './logo.svg';
import './App.css';
import MyTable from './Component/MyTable';
import Technical from './Component/Technical';
import SingleTicker from './Component/SingleTicker';
import TickerTape from './Component/TickerTape/TickerTape';

function App() {
  return (
    <div className="App">
      <h2 className="text-xl">Forex Heat Map Widget</h2>
      <MyTable isColorFull= {true}/>
      <br/>
      <br/>
      <h2 className="text-xl">Forex Cross Rates Widget</h2>
      <MyTable isColorFull={false}/>
      <br/>
      <div className="text-center w-3/5 mx-auto">
      <Technical/>
      </div>
      <br/>
      <br/>
      <h2>Single Ticker</h2>
      <SingleTicker/>
      <br/>
      <br/>
      <br/>
      <TickerTape/>
    </div>
  );
}

export default App;
