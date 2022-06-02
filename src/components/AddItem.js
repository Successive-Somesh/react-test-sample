import React, { useState, useRef } from 'react';
import {v4} from 'uuid';
function AddItem({items, setItems}) {
    const [item, setItem] = useState({});
    const inputElement = useRef(null);

    const addItem = ()=>{
        const name = inputElement.current.value;
        if(!name) return;
        console.log("Add Item Clicked");
        const updatedItems = [
            ...items,
            {
                id : v4(),
                name:name,
                desc:"some desc",
                status: true
            }
        ];
        setItems(updatedItems);
        setItem({});
        inputElement.current.value = "";
        console.log("Field Cleared");
    }

    return (
        <div>
            <input type="text" name="item" placeholder="enter item name" value={item.name} ref={inputElement}/>
            <button role="add-button" name="add" onClick={addItem}>Add Item</button> 
        </div>
    );
}

export default AddItem;