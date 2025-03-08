
import app from "./configuration"; // Assuming the correct path to your configuration file
import { getDatabase, ref, set, push, onValue } from "firebase/database";

const fetchData = (collection) => {
    return new Promise((resolve, reject) => {
        const database = getDatabase(app);
        const collectionRef = ref(database, collection);//"Selfcare/");

        // Listen for changes in the collection
        onValue(collectionRef, (snapshot) => {
            const dataItem = snapshot.val();

            // Check if dataItem exists
            if (dataItem) {
                // Convert the object values into an array
                const displayItem = Object.values(dataItem);
                console.log(displayItem);
                resolve(displayItem);
                // const justValues = [];
                // for (let i = 0; i < displayItem.length; i++) {
                //   // console.log(displayItem[i]['item']);
                //   justValues.push(displayItem[i]['item']);
                // }
                // console.log(justValues);
                
                //set the correct state
                // if (collection === 'Selfcare') setSelfcareData(displayItem);
                // else if (collection === 'Support') setSupportData(displayItem);
                // setSelfcareData(displayItem);
            } else {
                resolve([]);
            }
        }, (error) => {
            reject(error);
        });
    });
}

export { fetchData };