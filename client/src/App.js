import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  onSubmitCar(){
   axios.post('/api/addcar',{
      brand: 'Ford',
      model: 'Focus',
      year: 2000,
      avail: true
   })
   .then( response => {
     console.log(response.data)
   })
  }


  render(){
  return (
    <div className="App">
        <button
          onClick={()=> this.onSubmitCar()}
        >
          Add car
        </button>
    </div>
  )
}
}

export default App;
