import { useState } from "react";

import ShoppingList from "../component/ShoppingList";
import ShoppingListForm from "../component/ShoppingListForm";
import Item from "../models/Item";



function Page1() {
    const [items, setItems] = useState<Item[]>([]);

    // const items = [
    //     {id: 1, product: "Lemon", quantity: 3},
    //     {id: 2, product: "Melon", quantity: 6},
    // ];

    return (
        <div className="Page1">
            <ShoppingList items={items}/>
            <ShoppingListForm/>
        </div>
    )
}

export default Page1;