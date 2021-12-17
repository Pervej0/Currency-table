import "./App.css";
import MyTable from "./Component/MyTable";
import Technical from "./Component/Technical";
import SingleTicker from "./Component/SingleTicker";
import TickerTape from "./Component/TickerTape/TickerTape";
import MiniChart from "./Component/MiniChart/MiniChart";
import MyTable2 from "./Component/MyTable2/MyTable2";
import MyTable3 from "./Component/MyTable3/MyTable3";
import MyTable4 from "./Component/MyTable4/MyTable4";
import MyTable5 from "./Component/MyTable5/MyTable5";
import TickerWidget from "./Component/TickerWidget/TickerWidget";

function App() {
  return (
    <div className="App">
      <h2 className="text-2xl my-4">Forex Heat Map Widget</h2>
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
      {/* 
      <MyTable3 isColorful={true}/>
      <br/>
      <br/>
      <MyTable3 isColorful={false}/>
      <br/>   */}

      {/*   <MyTable4 isColorful={true}/>
      <br/>
      <br/>
      <MyTable4 isColorful={false}/>
      <br/>  */}

      <MyTable5 isColorful={true} />
      <br />
      <br />
      <MyTable5 isColorful={false} />
      <br />

      <Technical />
      <br />
      <br />
      <h2 className="text-2xl my-4">Ticker Widget</h2>
      <TickerWidget />
      {/* <SingleTicker/> */}
      <br />
      <br />
      <br />
      <TickerTape />
      <br />
      <br />
      <br />
      {/* <MiniChart/> */}
    </div>
  );
}

export default App;
