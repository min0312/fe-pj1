import { useState } from "react";
import { v4 as getId } from "uuid";

import ShoppingList from "../component/ShoppingList";
import ShoppingListForm from "../component/ShoppingListForm";
import Item from "../models/Item";

function Page1() {
    const [items, setItems] = useState<Item[]>([]);

    const addItem = (product: string, quantity: number) => {
        console.log(product, quantity);
        setItems([...items, { id: getId(), product, quantity }]);
    };
    // const items = [
    //     {id: 1, product: "Lemon", quantity: 3},
    //     {id: 2, product: "Melon", quantity: 6},
    // ];

    return (
        <div className="Page1">
            <ShoppingList items={items}/>
            <ShoppingListForm onAddItem={addItem}/>
        </div>
    )
}

export default Page1;