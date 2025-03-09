
import React, { useEffect, useState } from "react";
import app from "./configuration"; 
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import './SelfcareList.css';
import SelfcareItem from "./SelfcareItem";

function SelfcareList() {
    const [selfcareData, setSelfcareData] = useState([]);
  
    function handleSubmit(event) {
      console.log('submitted form');
      event.preventDefault();
  
      //get form data
      const data = new FormData(event.target);
      
      const db = getDatabase();
          
      const selfcareRef = ref(db, 'Selfcare');
      const newSelfcareRef = push(selfcareRef);
      set(newSelfcareRef, {
        item: data.get('newItem')
      });
  
      //clear form
      document.getElementById('selfcare-form').reset();
    };
  
    useEffect(() => {
      // Initialize the Firebase database with the provided configuration
      const database = getDatabase(app);
      
      // Reference to the specific collection in the database
  
      // Function to fetch data from a specfic collection in the database
      const fetchData = (collection) => {
        const collectionRef = ref(database, collection);//"Selfcare/");
  
        // Listen for changes in the collection
        onValue(collectionRef, (snapshot) => {
          const dataItem = snapshot.val();
  
          // Check if dataItem exists
          if (dataItem) {
            // Convert the object values into an array
            const displayItem = Object.values(dataItem);

            setSelfcareData(displayItem);
          }
        });
      };
      fetchData('Selfcare');
    }, []);
  
    return (
    <div id = "body">
        <h1 id="selfcare-h1">Self Care Ideas</h1>
        {selfcareData.map((item, index) => (
          <SelfcareItem key={index} item={item['item']} />
        ))}
        <form id="selfcare-form" onSubmit={handleSubmit}>
          <input type="text" name="newItem" id="new-item"/>
          <button type="submit">Add</button>
        </form>
        <button>Suggest</button>
      </div>
    );
}

export default SelfcareList;