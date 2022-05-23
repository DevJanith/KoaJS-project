import { getCurrentDate } from "../utility/date.js";
import { v4 as uuidv4 } from 'uuid';


let purchaseData = [
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
    },
]


export const read = async function read(ctx) {
    try {
        ctx.body = purchaseData.filter((e => e.states != 3));
    } catch (error) {
        console.log(error)
    }

}

export const create = async function create(ctx) {
    const purchase = ctx.request.body;
    try {

        purchase.id = uuidv4();
        purchase.createdDate = getCurrentDate();
        purchase.states = 1;

        if (purchase.items != null && purchase.total != null && purchase.customerID != null) {
            purchaseData.push(purchase);
            ctx.body = "purchase Created Successfully";
        } else {
            ctx.body = "Required Field Empty";
        }

    } catch (error) {
        console.log(error)
    }
}

export const update = async function update(ctx) {
    var purchaseId = ctx.params.id;
    let purchase = ctx.request.body;
    const index = purchaseData.findIndex((e) => e.id === purchaseId);
    let message;

    try {
        if (index === -1) {
            purchase.id = uuidv4();
            purchase.createdDate = getCurrentDate();
            purchase.states = 1;

            if (purchase.items != null && purchase.total != null && purchase.customerID != null) {
                purchaseData.push(purchase);
                message = "purchase Created Successfully";
            } else {
                message = "Required Field Empty";
            }
        } else {
            purchase.updatedDate = getCurrentDate();
            purchase.states = 2;
            purchaseData[index] = purchase;
            message = "purchase Updated Successfully"
        }
        ctx.body = message;
    } catch (error) {
        console.log(error)
    }

}

export const deleteData = async function deleteData(ctx) {
    const purchaseId = ctx.params.id
    const index = purchaseData.findIndex((e) => e.id === purchaseId);
    let message;

    if (index === -1) {
        message = "purchase Not Found"
    } else {
        purchaseData[index].updatedDate = getCurrentDate();;
        purchaseData[index].states = 3;
        message = "purchase Deleted Successfully"
    }
    ctx.body = message;
}

