import './App.css';
import React, { useEffect, useState } from "react";

//components
import SelfcareList from './SelfcareList';
import SupportList from './SupportList';
import PanicButton from './PanicButton';
import SuggestionPopup from './SuggestionPopup';
import BreathingExercise from './BreathingExe';

import candle from './images/candle_gif.gif';

function PanicDashboard() {
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);

  return (
    <div id="app">
      <div class="section" id="support-list">
      <SupportList></SupportList>
      </div>
      <div class="section" id="selfcare-list">
      <SelfcareList onOpen={() => setSuggestionsOpen(true)}></SelfcareList>
      </div>
      <div class="section" id="breathing">
        <BreathingExercise></BreathingExercise>
        <div className='candle-section'>
          <p id="candle-text">Focus on the flame</p>
          <img src={candle} id="candle"></img>
        </div>
      </div>

      {/* suggestion popup */}
      {suggestionsOpen ? (
          <SuggestionPopup 
            onClose={() => setSuggestionsOpen(false)}
            />
        ) : null} 
    </div>
  );
}

export default PanicDashboard;