import './App.css';
import React, { useEffect, useState } from "react";

//components
import SelfcareList from './SelfcareList';
import SupportList from './SupportList';
import PanicButton from './PanicButton';

function App() {

  return (
    <div id="app">
      <div id="support-list">
      <SupportList></SupportList>
      </div>
      <div id="selfcare-list">
      <SelfcareList></SelfcareList>
      </div>
      {/* <PanicButton></PanicButton> */}
    </div>
  );
}

export default App;