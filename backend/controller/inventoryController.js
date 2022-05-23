import { getCurrentDate } from "../utility/date.js";
import { v4 as uuidv4 } from 'uuid';


let inventoryData = [
    {
        "id": "1",
        "name": "Bolt Point Pen",
        "qty": "1000",
        "description": "Lorem Ipsum is simply dummy text",
        "price": "20.00",
        "type": "solid",
        "createdDate": "2021/05/05",
        "updatedDate": "",
        "states": 1
    },
    {
        "id": "2",
        "name": "Single Rule (40pg)",
        "qty": "1000",
        "description": "Lorem Ipsum is simply dummy text",
        "price": "45.00",
        "type": "solid",
        "createdDate": "2021/05/05",
        "updatedDate": "",
        "states": 1
    },
]


export const read = async function read(ctx) {
    try {
        ctx.body = inventoryData.filter((e => e.states != 3));
    } catch (error) {
        console.log(error)
    }

}

export const create = async function create(ctx) {
    const inventory = ctx.request.body;
    try {

        inventory.id = uuidv4();
        inventory.createdDate = getCurrentDate();
        inventory.states = 1;

        if (inventory.name != null && inventory.qty != null && inventory.price != null && inventory.type != null) {
            inventoryData.push(inventory);
            ctx.body = "inventory Created Successfully";
        } else {
            ctx.body = "Required Field Empty";
        }

    } catch (error) {
        console.log(error)
    }
}

export const update = async function update(ctx) {
    var inventoryId = ctx.params.id;
    let inventory = ctx.request.body;
    const index = inventoryData.findIndex((e) => e.id === inventoryId);
    let message;

    try {
        if (index === -1) {
            inventory.id = uuidv4();
            inventory.createdDate = getCurrentDate();
            inventory.states = 1;

            if (inventory.name != null && inventory.qty != null && inventory.price != null && inventory.type != null) {
                inventoryData.push(inventory);
                message = "inventory Created Successfully";
            } else {
                message = "Required Field Empty";
            }
        } else {
            inventory.updatedDate = getCurrentDate();
            inventory.states = 2;
            inventoryData[index] = inventory;
            message = "inventory Updated Successfully"
        }
        ctx.body = message;
    } catch (error) {
        console.log(error)
    }

}

export const deleteData = async function deleteData(ctx) {
    const inventoryId = ctx.params.id
    const index = inventoryData.findIndex((e) => e.id === inventoryId);
    let message;

    if (index === -1) {
        message = "inventory Not Found"
    } else {
        inventoryData[index].updatedDate = getCurrentDate();;
        inventoryData[index].states = 3;
        message = "inventory Deleted Successfully"
    }
    ctx.body = message;
}

