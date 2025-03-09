import './App.css';
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";

import panic_button from './images/panic_button.png';

//components
// import SelfcareList from './SelfcareList';
// import SupportList from './SupportList';
// import PanicButton from './PanicButton';
// import SuggestionPopup from './SuggestionPopup';

function App() {
  // const [suggestionsOpen, setSuggestionsOpen] = useState(false);

  return (
    <div id='main-page'>
      <a href={'\panic'}><button id='panic-button'><img id='panic-image' src={panic_button}></img></button></a>
    </div>
    // <div id="app">
    //   <div class="section" id="support-list">
    //   <SupportList></SupportList>
    //   </div>
    //   <div class="section" id="selfcare-list">
    //   <SelfcareList onOpen={() => setSuggestionsOpen(true)}></SelfcareList>
    //   </div>

    //   {suggestionsOpen ? (
    //       <SuggestionPopup onClose={() => setSuggestionsOpen(false)}>
    //       </SuggestionPopup>
    //     ) : null} 
    // </div>
  );
}

export default App;