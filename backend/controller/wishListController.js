import { getCurrentDate } from "../utility/date.js";
import { v4 as uuidv4 } from 'uuid';


let wishListData = [
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
                "itemName": "Bolt Point Pen",
                "itemQty": "10",
                "itemDescription": "Lorem Ipsum is simply dummy text",
                "itemPrice": "20.00",
                "itemType": "solid"
            }
        ],
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
                "itemName": "Bolt Point Pen",
                "itemQty": "10",
                "itemDescription": "Lorem Ipsum is simply dummy text",
                "itemPrice": "20.00",
                "itemType": "solid"
            }
        ],
        "customerID": "2",
        "createdDate": "2021/05/05",
        "updatedDate": "",
        "states": 1
    },
]


export const read = async function read(ctx) {
    try {
        ctx.body = wishListData.filter((e => e.states != 3));
    } catch (error) {
        console.log(error)
    }

}

export const create = async function create(ctx) {
    const wishList = ctx.request.body;
    try {

        wishList.id = uuidv4();
        wishList.createdDate = getCurrentDate();
        wishList.states = 1;

        if (wishList.id != null && wishList.items != null && wishList.customerID != null) {
            wishListData.push(wishList);
            ctx.body = "wishList Created Successfully";
        } else {
            ctx.body = "Required Field Empty";
        }

    } catch (error) {
        console.log(error)
    }
}

export const update = async function update(ctx) {
    var wishListId = ctx.params.id;
    let wishList = ctx.request.body;
    const index = wishListData.findIndex((e) => e.id === wishListId);
    let message;

    try {
        if (index === -1) {
            wishList.id = uuidv4();
            wishList.createdDate = getCurrentDate();
            wishList.states = 1;

            if (wishList.id != null && wishList.items != null && wishList.customerID != null) {
                wishListData.push(wishList);
                message = "wishList Created Successfully";
            } else {
                message = "Required Field Empty";
            }
        } else {
            wishList.updatedDate = getCurrentDate();
            wishList.states = 2;
            wishListData[index] = wishList;
            message = "wishList Updated Successfully"
        }
        ctx.body = message;
    } catch (error) {
        console.log(error)
    }

}

export const deleteData = async function deleteData(ctx) {
    const wishListId = ctx.params.id
    const index = wishListData.findIndex((e) => e.id === wishListId);
    let message;

    if (index === -1) {
        message = "wishList Not Found"
    } else {
        wishListData[index].updatedDate = getCurrentDate();;
        wishListData[index].states = 3;
        message = "wishList Deleted Successfully"
    }
    ctx.body = message;
}

