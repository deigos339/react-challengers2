import React, {useState} from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'


function App() {
  const [stateCity, setStateCity] = useState("");
  const [stateDate, setStateDate] = useState("");
  const [stateCovidApi, setStateCovidApi] = useState([]);

  const getCovidCases = () => {
    
    axios.get('https://www.datos.gov.co/resource/gt2j-8ykr.json?ciudad_de_ubicaci_n=' + stateCity + '&fecha_diagnostico=' + stateDate + 'T00:00:00.000')
    .then((res) => {
        setStateCovidApi(res.data);
       }); 
       
};


  return ( 
  <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          <h5>Casos de Covid en Colombia</h5>
          <div className="row">
            <div id="city" className="col">
              <input 
               type="text"
               onChange={(e)=>{setStateCity(e.target.value)}}
               value={ stateCity } 
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
          <div className="row">
            <div className="col mt-3 mb-3 ">
             <button 
              type="button" 
              className="btn btn-info btn-lg "
              onClick={getCovidCases}
             >
             Info
             </button>
            </div>
        </div>
          </div>
       

        <div className="container">
        <table className="table table-striped table-dark">
         <thead>
          <tr>
            <th scope="col">Edad</th>
            <th scope="col">Sexo</th>
            <th scope="col">Estado</th>
            <th scope="col">Tipo</th>
          </tr>
        </thead>
        <tbody>
           {stateCovidApi.map((covidCase, index) => {
            return (
            <tr key={index}>
            <td>{covidCase.edad}</td>
            <td>{covidCase.sexo}</td>
            <td>{covidCase.estado}</td>
            <td>{covidCase.tipo}</td>
           </tr>
           );
        })}
   
      </tbody>
    </table>
          
        </div> 
      </header>
    </div>
  );
}

export default App;
