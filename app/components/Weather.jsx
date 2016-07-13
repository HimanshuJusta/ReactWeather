import React, { Component } from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import OpenWeatherMap from 'GetWeather';

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoading: false
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(location){
    this.setState({
      isLoading:true
    });
    OpenWeatherMap(location).then(temp =>{
      this.setState({
        location: location,
        temp:temp,
        isLoading: false
      });
    }, err =>{
      this.setState({
        isLoading: false
      });
      alert(err);
    });
  }

  render(){
    const {isLoading, temp, location} = this.state;
    function renderMessage(){
      if(isLoading){
        return <h3>Fetching Weather...</h3>
      }else if(temp && location){
        return <WeatherMessage location ={location} temp={temp}/>
      }
    }
    return(
      <div>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
}
