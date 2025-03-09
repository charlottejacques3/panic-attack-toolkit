import React, {useState} from 'react';
import { getDatabase, ref, set, push, onValue } from "firebase/database";

// referenced tutorial: https://deadsimplechat.com/blog/creating-a-reusable-pop-up-modal-in-react-from-scratch/


function SuggestionPopup({ onClose }) {

    const [suggestions, updateSuggestions] = useState([
        'Go for a walk',
        'Call a friend',
        'Go for a run',
        'Listen to music',
        'Watch funny videos']);
    const [suggestion, regenerateSuggestion] = useState(randomSuggestion(true));

    function saveSuggestion() {

        //save to database
        const db = getDatabase();
        const selfcareRef = ref(db, 'Selfcare');
        const newSelfcareRef = push(selfcareRef);
        set(newSelfcareRef, {
            item: suggestion
        });

        //remove item from list of suggestions
        updateSuggestions(suggestions.filter(s => s !== suggestion));

        onClose();
    }

    function randomSuggestion(initial) {
        // const suggestions = [
        //     'Go for a walk',
        //     'Call a friend',
        //     'Go for a run',
        //     'Listen to music',
        //     'Watch funny videos'
        // ];
        var randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * suggestions.length);
        } while (!initial && suggestion != null && suggestion === suggestions[randomIndex]);
        return suggestions[randomIndex];
    }

    return (
        <div style={styles.overlay}>
            <div style={styles.modal}>
                <h2>Here's a suggestion for you:</h2>
                <p>{suggestion}</p>
                <button onClick={() => regenerateSuggestion(randomSuggestion(false))}>Refresh</button>
                <button onClick={saveSuggestion}>Add This</button>
                <button style={styles.closeButton} onClick={onClose}>X</button>
            </div>
        </div>
    );
}

const styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    modal: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '8px',
      position: 'relative',
      width: '80%',
      maxWidth: '500px'
    },
    closeButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      background: 'transparent',
      border: 'none',
      fontSize: '18px',
      cursor: 'pointer'
    }
  };

export default SuggestionPopup;