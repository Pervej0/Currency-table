import logo from './logo.svg';
import './App.css';
import MyTable from './Component/MyTable';
import Technical from './Component/Technical';

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
    </div>
  );
}

export default App;
