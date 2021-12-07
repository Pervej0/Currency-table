import logo from './logo.svg';
import './App.css';
import MyTable from './Component/MyTable';
import Technical from './Component/Technical';
import SingleTicker from './Component/SingleTicker';

function App() {
  return (
    <div className="App">
      <h1>Hello </h1>
      <MyTable/>
      <br/>
      <br/>
      <br/>
      <div className="text-center w-3/5 mx-auto">
      <Technical/>
      </div>
      <br/>
      <br/>
      <SingleTicker/>
    </div>
  );
}

export default App;
