

import ShoppingList from "../component/ShoppingList";


function Page1() {
    const items = [
        {id: 1, product: "Lemon", quantity: 3},
        {id: 2, product: "Melon", quantity: 6},
    ];

    return (
        <div className="Page1">
            <ShoppingList items={items}/>
        </div>
    )
}

export default Page1;