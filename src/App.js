import './App.css';
import React, { useEffect, useState } from "react";

//components
import SelfcareList from './SelfcareList';
import SupportList from './SupportList';
import PanicButton from './PanicButton';

function App() {

  return (
    <div id="app">
      <div class="section" id="support-list">
      <SupportList></SupportList>
      </div>
      <div class="section" id="selfcare-list">
      <SelfcareList></SelfcareList>
      </div>
    </div>
  );
}

export default App;