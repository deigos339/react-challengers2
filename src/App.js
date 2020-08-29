import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const [stateCity, setStateCity] = useState("");
  const [stateDate, setStateDate] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          <div className="row">
            <div id="city" className="col">
              <input 
               type="text"
               onChange={(e)=>{setStateCity(e.target.value)}}
               value={stateCity} 
               placeholder="City"
               />
            </div>
            <div id="date" className="col">
              <input
               type="text"
               onChange={(e)=>{setStateDate(e.target.value)}}
               value={stateDate}
               placeholder="Date"
               />
            </div>
          </div>
        </div>
        <div className="col mt-2">
          <button 
          type="button" 
          class="btn btn-info btn-lg "
          onClick=""
          >
          Info
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
