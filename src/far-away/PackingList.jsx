import Item from './Item'

export default function PackingList({items, onDeleteItem}) {
    return <ul className="list">
        {items.map((item) => (<Item item={item} key={item.id} onDeleteItem={onDeleteItem}/>))}
        </ul>;
}
