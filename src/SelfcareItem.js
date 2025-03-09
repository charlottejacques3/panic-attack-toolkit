import React, { useState } from 'react';
import { getDatabase, ref, set, push, onValue, remove } from "firebase/database";
import './SelfcareItem.css';

//images
import trash_can from './images/trash_can.png'

function SelfcareItem({item, id}) {

    function deleteItem() {
        console.log('deleting item');
        console.log(id);
        const db = getDatabase();
        const selfcareRef = ref(db, 'Selfcare/' + id);
        remove(selfcareRef);
    }

    return (
        <div className="selfcare-item">
            <ul>
                <li>{item}</li>
            </ul>
            <button class="del-button" onClick={deleteItem}><img id='delete-icon' src={trash_can}/></button>
        </div>
    );
}

export default SelfcareItem;