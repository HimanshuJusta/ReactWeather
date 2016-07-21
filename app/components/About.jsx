import React, { Component } from 'react';

export default (props) => {
  return(
    <div>
      <h1 className="text-center">About Us</h1>
      <p>
        This a weather application build on React. I have build this for Learning React.
      </p>
      <hr />
      <p>Hera are the some of the tools I used:</p>
      <ul>
        <li><a href="https://facebook.github.io/react">React</a> - This was the Javascript framework used</li>
        <li><a href="https://openweathermap.org">Open Weather Map</a> - This was used to fetch the weather data</li>
      </ul>
      <hr />
      <p>Source code for this project can be found at <a href="https://github.com/HimanshuJusta/ReactWeather">Github</a></p>
    </div>
  );
}
