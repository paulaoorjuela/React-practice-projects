import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
    const [sorBy, setSortBy] = useState('input')
    let sortedItems
    if(sorBy === 'input') sortedItems = items
    if(sorBy === 'description') sortedItems = items.slice().sort((a,b)=>a.description.localeCompare(b.description))
    if(sorBy === 'packed') sortedItems = items.slice().sort((a,b)=>Number(a.packed) - Number(b.packed))

    return (
        <div className="list">
            <ul>
                {sortedItems.map((item) => (
                    <Item
                        item={item}
                        key={item.id}
                        onDeleteItem={onDeleteItem}
                        onToggleItem={onToggleItem}
                    />
                ))}
            </ul>
            <div className="actions">
                <select value={sorBy} onChange={(e)=>{setSortBy(e.target.value)}}>
                    <option value="input">Sort by input order</option>
                    <option value="description">Sort by description order</option>
                    <option value="packed">Sort by packed status</option>
                </select>
                <button onClick={onClearList}>Clear List</button>
            </div>
        </div>
    );
}
