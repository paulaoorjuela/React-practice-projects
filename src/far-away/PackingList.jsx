import Item from './Item'

const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 3, description: "Shirts", quantity: 5, packed: true },
    { id: 4, description: "Pants", quantity: 8, packed: false },
    { id: 5, description: "Jackets", quantity: 3, packed: true },
    { id: 6, description: "T-shirts", quantity: 10, packed: true },
];


export default function PackingList() {
    return <ul className="list">
        {initialItems.map((item) => (<Item item={item} key={item.id}/>))}
        </ul>;
}
