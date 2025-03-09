
import React, { useEffect, useState } from "react";
import app from "./configuration"; 
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import './SupportList.css';
import ContactDetail from "./ContactDetail";
// import { Button } from '@mui/material';

function SupportList() {
    const [data, setData] = useState([]);
    const [adding, setAdding] = useState(false);
  
    function handleSubmit(event) {
      console.log('submitted form');
      event.preventDefault();
  
      //get form data
      const data = new FormData(event.target);
      
      const db = getDatabase();
          
      const selfcareRef = ref(db, 'Support');
      const newSelfcareRef = push(selfcareRef);
      set(newSelfcareRef, {
        name: data.get('name'),
        phone: data.get('phone')
      });
  
      //clear form
      document.getElementById('support-form').reset();
    };
  
    useEffect(() => {
      // Initialize the Firebase database with the provided configuration
      const database = getDatabase(app);
  
      // Function to fetch data from a specfic collection in the database
      const fetchData = (collection) => {
        const collectionRef = ref(database, collection);
  
        // Listen for changes in the collection
        onValue(collectionRef, (snapshot) => {
          const dataItem = snapshot.val();
  
          // Check if dataItem exists
          if (dataItem) {
            const displayItem = Object.values(dataItem);

            setData(displayItem);
          }
        });
      };
  
      // Fetch data when the component mounts
      fetchData('Support');
    }, []);
  
    return (
    <>
        <script>

        </script>
        <div id = "contact-list">
            <h1 id="support-h1">Support</h1>
            <ContactDetail name="Emergency" phone="911"/>
            <ContactDetail name="Suicide Prevention Line" phone="[phone]"/>
            {data.map((item, index) => (
                <ContactDetail key={index} name={item['name']} phone={item['phone']}/>
            ))}

            {adding && <form id="support-form" onSubmit={handleSubmit}>
                <label>Name: </label>
                <input type="text" name="name"/>
                <br/>
                <label>Phone Number: </label>
                <input type="tel" name="phone"/>
                <br></br>
                <button onClick={() => setAdding(false)}>Cancel</button>
                <button type="submit">Save</button>
            </form>}

            <button onClick={() => setAdding(true)}>Add New Contact</button>
        </div>
    </>
    
    );
}

export default SupportList;