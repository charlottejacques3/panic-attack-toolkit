// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import app from "./configuration"; // Assuming the correct path to your configuration file
import { getDatabase, ref, set, push, onValue } from "firebase/database";
// import firebase from 'firebase';
// import database from './firebase';

function App() {
  const [data, setData] = useState([]);

  function handleSubmit(event) {
    console.log('submitted form');
    event.preventDefault();

    //get form data
    const data = new FormData(event.target);
    
    const db = getDatabase();
        
    const selfcareRef = ref(db, "Selfcare/")
    const newSelfcareRef = push(selfcareRef);
    set(newSelfcareRef, {
      item: data.get('newItem')
    });
    // console.log(data);
  };

  useEffect(() => {
    // Initialize the Firebase database with the provided configuration
    const database = getDatabase(app);
    
    // Reference to the specific collection in the database
    const collectionRef = ref(database, "Selfcare/");

    // Function to fetch data from the database
    const fetchData = () => {
      // Listen for changes in the collection
      onValue(collectionRef, (snapshot) => {
        const dataItem = snapshot.val();

        // Check if dataItem exists
        if (dataItem) {
          // Convert the object values into an array
          const displayItem = Object.values(dataItem);
          console.log(displayItem);
          setData(displayItem);
        }
      });
    };

    // Fetch data when the component mounts
    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from database:</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item['item']}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" name="newItem"/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;