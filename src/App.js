import logo from './logo.svg';
import './App.css';
import Filters from './Filters/filters';
import HotelsList from './Hotels/HotelsList';
import React , {Component } from 'react';
import { hotels } from './data';

class App extends Component {
  state={
    filters:[],
    hotelsArr:hotels
  }
  filterBy =(FilterInputs)=>{
    this.setState({filters:FilterInputs})
    const options = FilterInputs;
    const filteredHotels = hotels.filter(hotel =>{
      const isPassed = options.every(option =>hotel[option]===true)
      if(isPassed===true){
        return hotel
      }
    })
    console.log(options)
    console.log(filteredHotels)
    this.setState({hotelsArr:filteredHotels})
  }
  render(){
  

  return (
    <div className="App">
      <Filters filters={this.state.filters} filterBy={this.filterBy}/>
      <HotelsList hotelsArr={this.state.hotelsArr}/>
    </div>
  )};
}

export default App;
