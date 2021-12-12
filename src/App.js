import './App.css';
import MyTable from './Component/MyTable';
import Technical from './Component/Technical';
import SingleTicker from './Component/SingleTicker';
import TickerTape from './Component/TickerTape/TickerTape';
import MiniChart from './Component/MiniChart/MiniChart';
import MyTable2 from './Component/MyTable2/MyTable2';
import MyTable3 from './Component/MyTable3/MyTable3';

function App() {
  return (
    <div className="App">
      <h2 className="text-xl">Forex Heat Map Widget</h2>
      {/* <MyTable isColorFull= {true}/>
      <br/>
      <br/>
      <h2 className="text-xl">Forex Cross Rates Widget</h2>
      <MyTable isColorFull={false}/> */}
      
      {/* <MyTable2 isColorful={true}/>
      <br/>
      <br/>
      <br/>
      <MyTable2 isColorful={false}/> */}

      <MyTable3/>
      <br/>
      <Technical/>
      <br/>
      <br/>
      <h2>Single Ticker</h2>
      <SingleTicker/>
      <br/>
      <br/>
      <br/>
      <TickerTape/>
      <br/>
      <br/>
      <br/>
      <MiniChart/>
    </div>
  );
}

export default App;
