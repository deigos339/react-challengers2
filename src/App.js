import React, {useState} from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
//import ApiContainer from './containers/ApiContainer';

function App() {
  const [stateCity, setStateCity] = useState("");
  const [stateDate, setStateDate] = useState("");
  const [stateCovidApi, setStateCovidApi] = useState([]);

  const getCovidCases = () => {
    
    axios.get('https://www.datos.gov.co/resource/gt2j-8ykr.json?ciudad_de_ubicaci_n=Marinilla&fecha_diagnostico=2020-08-06T00:00:00.000')
    .then((res) => {
        setStateCovidApi(res.data);
       }); 
};

/*    const info = () => {
  {stateCovidApi.map((stateCovidApi)
    if ({stateCity} === {stateCovidApi.ciudad_de_ubicaci_n}) {
        <div className="col-12">
                
                {stateCovidApi.edad}, {stateCovidApi.sexo}, {stateCovidApi.estado}, {stateCovidApi.tipo}
              </div> 
    } else {console.log("no funciona");}
  } */  

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
               type="date"
               onChange={(e)=>{setStateDate(e.target.value)}}
               value={stateDate}
               />
            </div>
          </div>
        </div>
        <div className="col mt-2">
          <button 
          type="button" 
          className="btn btn-info btn-lg "
          onClick={getCovidCases}
          >
          Info
          </button>
        </div>
        <div className="row">
        
          {stateCovidApi.map((stateCovidApi) => {
            return (
            
              <div className="col-12">
                
              {stateCovidApi.edad}, {stateCovidApi.sexo}, {stateCovidApi.estado}, {stateCovidApi.tipo}
            </div> 
            ) 
          })} 
        </div> 
      </header>
    </div>
  );
}

export default App;
