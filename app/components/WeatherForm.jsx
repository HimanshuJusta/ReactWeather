import React, { Component } from 'react';

export default class WeatherForm extends Component {
  constructor(props){
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onFormSubmit(e){
    e.preventDefault();

    var location = this.refs.location.value;

    if(location.length >0){
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  }
  render(){
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="location"></input>
          <button>Get Weather</button>
        </form>
      </div>
    );
  }
}
