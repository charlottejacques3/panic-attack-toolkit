import './App.css';
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";

import panic_button from './images/panic_button.png';

function App() {

  return (
    <div id='main-page'>
      <Link to={'\panic'}><button id='panic-button'><img id='panic-image' src={panic_button}></img></button></Link>
    </div>
  );
}

export default App;