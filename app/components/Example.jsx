import React, { Component } from 'react';
import { Link } from 'react-router';
export default (props) => {
  return(
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Heare are few example locations to try out:</p>
      <ol>
        <li><Link to='/?location=Philadelphia'>Philadelphia, PA</Link></li>
        <li><Link to='/?location=Rio'>Rio, Brazil</Link></li>
      </ol>
    </div>
  );
}
