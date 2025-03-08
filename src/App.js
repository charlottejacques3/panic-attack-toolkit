import './App.css';
import React, { useEffect, useState } from "react";

//components
import SelfcareList from './SelfcareList';
import SupportList from './SupportList';

function App() {

  return (
    <div>
      <SupportList></SupportList>
      <SelfcareList></SelfcareList>
    </div>
  );
}

export default App;