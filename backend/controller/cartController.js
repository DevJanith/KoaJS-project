import { getCurrentDate } from "../utility/date.js";
import { v4 as uuidv4 } from 'uuid';


let cartData = [
    {
        "id": "1",
        "items": [
            {
                "InventoryItemId": "item1",
                "itemName": "Bolt Point Pen",
                "itemQty": "10",
                "itemDescription": "Lorem Ipsum is simply dummy text",
                "itemPrice": "20.00",
                "itemType": "solid"
            },
            {
                "InventoryItemId": "item2",
                "itemName": "CR book (40pg)",
                "itemQty": "10",
                "itemDescription": "Lorem Ipsum is simply dummy text",
                "itemPrice": "55.00",
                "itemType": "solid"
            }
        ],
        "total": "750.00",
        "customerID": "1",
        "createdDate": "2021/05/05",
        "updatedDate": "",
        "states": 1
    },
    {
        "id": "2",
        "items": [
            {
                "InventoryItemId": "item1",
                "itemName": "Bolt Point Pen",
                "itemQty": "10",
                "itemDescription": "Lorem Ipsum is simply dummy text",
                "itemPrice": "20.00",
                "itemType": "solid"
            },
            {
                "InventoryItemId": "item2",
                "itemName": "CR book (40pg)",
                "itemQty": "10",
                "itemDescription": "Lorem Ipsum is simply dummy text",
                "itemPrice": "55.00",
                "itemType": "solid"
            }
        ],
        "total": "750.00",
        "customerID": "2",
        "createdDate": "2021/05/05",
        "updatedDate": "",
        "states": 1
    }
]


export const read = async function read(ctx) {
    try {
        ctx.body = cartData.filter((e => e.states != 3));
    } catch (error) {
        console.log(error)
    }

}

export const create = async function create(ctx) {
    const cart = ctx.request.body;
    try {

        cart.id = uuidv4();
        cart.createdDate = getCurrentDate();
        cart.states = 1;

        if (cart.id != null && cart.items != null && cart.customerID != null) {
            cartData.push(cart);
            ctx.body = "cart Created Successfully";
        } else {
            ctx.body = "Required Field Empty";
        }

    } catch (error) {
        console.log(error)
    }
}

export const update = async function update(ctx) {
    var cartId = ctx.params.id;
    let cart = ctx.request.body;
    const index = cartData.findIndex((e) => e.id === cartId);
    let message;

    try {
        if (index === -1) {
            cart.id = uuidv4();
            cart.createdDate = getCurrentDate();
            cart.states = 1;

            if (cart.id != null && cart.items != null && cart.customerID != null) {
                cartData.push(cart);
                message = "cart Created Successfully";
            } else {
                message = "Required Field Empty";
            }
        } else {
            cart.updatedDate = getCurrentDate();
            cart.states = 2;
            cartData[index] = cart;
            message = "cart Updated Successfully"
        }
        ctx.body = message;
    } catch (error) {
        console.log(error)
    }

}

export const deleteData = async function deleteData(ctx) {
    const cartId = ctx.params.id
    const index = cartData.findIndex((e) => e.id === cartId);
    let message;

    if (index === -1) {
        message = "cart Not Found"
    } else {
        cartData[index].updatedDate = getCurrentDate();;
        cartData[index].states = 3;
        message = "cart Deleted Successfully"
    }
    ctx.body = message;
}

