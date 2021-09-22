import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  state = {
    cars:[]
  }

  componentDidMount(){
    this.getCars()
  }


  getCars = () => {
    axios.get('/api/getcars')
    .then( response => {
      this.setState({cars:response.data})
    })
  }

  onCarRemove = () =>{
    axios.post('/api/removeCar',{
      brand:'Ford'
    })
    .then( response => {
      this.getCars();
    })
  }

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

  onCarUpdate = () => {
    axios.post('/api/updateCar',{
      id:'614b155ee336a89456f81ade',
      brand:'Chery'
    })
    .then( response => {
      this.getCars();
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
        <button
          onClick={()=> this.onCarRemove()}
        >
          Remove car
        </button>
        <button
          onClick={()=> this.onCarUpdate()}
        >
          Update car
        </button>
        <hr/>
        { this.state.cars.map((car)=>(
          <div> - {car.brand}</div>
        ))
        }
    </div>
  )
}
}

export default App;
