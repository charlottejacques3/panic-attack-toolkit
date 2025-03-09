import './App.css';
import React, { useEffect, useState } from "react";

//components
import SelfcareList from './SelfcareList';
import SupportList from './SupportList';
import PanicButton from './PanicButton';
import SuggestionPopup from './SuggestionPopup';
import BreathingExercise from './BreathingExe';

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
      </div>

      {/* suggestion popup */}
      {suggestionsOpen ? (
          <SuggestionPopup onClose={() => setSuggestionsOpen(false)}>
          </SuggestionPopup>
        ) : null} 
    </div>
  );
}

export default PanicDashboard;