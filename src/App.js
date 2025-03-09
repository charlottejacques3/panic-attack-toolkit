import './App.css';
import React, { useEffect, useState } from "react";

//components
import SelfcareList from './SelfcareList';
import SupportList from './SupportList';
import PanicButton from './PanicButton';
import SuggestionPopup from './SuggestionPopup';

function App() {
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);

  return (
    <div id="app">
      <div class="section" id="support-list">
      <SupportList></SupportList>
      </div>
      <div class="section" id="selfcare-list">
      <SelfcareList onOpen={() => setSuggestionsOpen(true)}></SelfcareList>
      </div>

      {/* suggestion popup */}
      {suggestionsOpen ? (
          <SuggestionPopup onClose={() => setSuggestionsOpen(false)}>
            {/* <h2>{this.state.activeItem.title}</h2>
            <p><strong>Technologies used: </strong>{this.state.activeItem.tech}</p>
            <SplitDescription text={this.state.activeItem.description}/>
            { this.state.activeItem.link !="" ? (
                    <a href={this.state.activeItem.link} className="btn btn-primary">Project Link</a>
                  ) : null} */}
          </SuggestionPopup>
        ) : null} 
    </div>
  );
}

export default App;