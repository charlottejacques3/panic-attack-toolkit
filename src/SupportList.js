
import React, { useEffect, useState } from "react";
import app from "./configuration"; 
import { getDatabase, ref, set, push, onValue } from "firebase/database";

function SupportList() {
    const [data, setData] = useState([]);
  
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
        <div>
            <h1>Support</h1>
            <table>
                <tr>
                    <td>Emergency</td>
                    <td>911</td>
                </tr>
                <tr>
                    <td>Suicide Prevention Line</td>
                    <td>(number)</td>
                </tr>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item['name']}</td>
                        <td>{item['phone']}</td>
                    </tr>
                ))}
            </table>  

            <form id="support-form" onSubmit={handleSubmit}>
                <label>Name: </label>
                <input type="text" name="name"/>
                <label>Phone Number: </label>
                <input type="tel" name="phone"/>
                <button type="submit">Add</button>
            </form>
        </div>
    </>
    
    );
}

export default SupportList;