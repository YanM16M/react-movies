import React, { useState } from 'react';
import './ComboBox.css';
import { IoAdd } from "react-icons/io5";
import { useEffect } from 'react/cjs/react.development';

function ComboBox({list, onChange}) {
    const [active, setActive] = useState(false); // pour savoir si on a cliqué sur la combo
    const [items, setItems] = useState(list);

    // fonction pour afficher/cacher la liste de la combo
    const activeCombo = () => setActive(!active)

    // fonction pour choisir un item dans la combo box
    const selectItem = (itemId) => {
        let array = [];
        let newItems = [...items];
        newItems[itemId].selected = !newItems[itemId].selected;
        setItems(newItems);

        array = items.filter(e => e.selected === true);

        //document.getElementsByClassName("select")[0].textContent = document.getElementById(itemId).textContent;
        setActive(false);
        onChange(array);
    }

    return ( 
        <div className="combo" onClick={activeCombo}>
            <div className="combo__select">
                
                {items.map(item => {
                    if (item.selected) {
                        return (
                            <div className="selected__container">
                                <span id={"combo" + item.id} className="select">{item.value}</span>
                            </div>
                        )
                    }
                })}

                <IoAdd/>
            </div>
            {active &&
            <div className="combo__list">
                {items.map(item => (
                    <span key={item.id} id={item.id} className="combo__list-item" onClick={() => selectItem(item.id)}>
                        <input type="checkbox" checked={item.selected} />
                        {item.value}
                    </span>
                ))}
            </div>
            }
        </div>
     );
}

export default ComboBox;