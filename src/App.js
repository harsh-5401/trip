import logo from './logo.svg';
import './App.css';
import data from './data'
import Tours from './components/Tours';
import { useState } from 'react';

function App() {

  const[tours,settours]=useState(data);

  function removetour(identity) {
    let newtours=tours.filter((tour) =>{
      return tour.id!==identity;
    })
    console.log(identity);
    settours(newtours);
  }


  return (


    <div>
      <Tours tours={tours} deletetour={removetour}></Tours>
    </div>

    
  );
}

export default App;
