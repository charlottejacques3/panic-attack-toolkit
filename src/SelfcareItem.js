import React, { useState } from 'react';
import './SelfcareItem.css';

function SelfcareItem({item}) {

    function deleteItem() {
        console.log('deleting item');
    }

    return (
        <div className="selfcare-item">
            <ul>
                <li>{item}</li>
            </ul>
            <button class="del-button" onClick={deleteItem}>Delete</button>
        </div>
    );
}

export default SelfcareItem;