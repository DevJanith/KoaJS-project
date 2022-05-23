import { getCurrentDate } from "../utility/date.js";
import { v4 as uuidv4 } from 'uuid';


let traderData = [
    {
        "id": "1",
        "name": "Jerry",
        "contactNo": "+94768523525",
        "address": "No.146, Rampart Road, Rthdal Kotte, Kotte",
        "email": "janithagamage1.ed@gmail.com",
        "createdDate": "2021/05/05",
        "updatedDate": "",
        "states": 1
    },
    {
        "id": "2",
        "name": "test",
        "contactNo": "+94768523525",
        "address": "No.146, Rampart Road, Rthdal Kotte, Kotte",
        "email": "janithagamage1.ed@gmail.com",
        "createdDate": "2021/05/05",
        "updatedDate": "",
        "states": 2
    }
]


export const read = async function read(ctx) {
    try {
        ctx.body = traderData.filter((e => e.states != 3));
    } catch (error) {
        console.log(error)
    }

}

export const create = async function create(ctx) {
    const trader = ctx.request.body;
    try {

        trader.id = uuidv4();
        trader.createdDate = getCurrentDate();
        trader.states = 1;

        if (trader.id != null && trader.name != null && trader.contactNo != null && trader.address != null && trader.email != null) {
            traderData.push(trader);
            ctx.body = "trader Created Successfully";
        } else {
            ctx.body = "Required Field Empty";
        }

    } catch (error) {
        console.log(error)
    }
}

export const update = async function update(ctx) {
    var traderId = ctx.params.id;
    let trader = ctx.request.body;
    const index = traderData.findIndex((e) => e.id === traderId);
    let message;

    try {
        if (index === -1) {
            trader.id = uuidv4();
            trader.createdDate = getCurrentDate();
            trader.states = 1;

            if (trader.id != null && trader.name != null && trader.contactNo != null && trader.address != null && trader.email != null) {
                traderData.push(trader);
                message = "trader Created Successfully";
            } else {
                message = "Required Field Empty";
            }
        } else {
            trader.updatedDate = getCurrentDate();
            trader.states = 2;
            traderData[index] = trader;
            message = "trader Updated Successfully"
        }
        ctx.body = message;
    } catch (error) {
        console.log(error)
    }

}

export const deleteData = async function deleteData(ctx) {
    const traderId = ctx.params.id
    const index = traderData.findIndex((e) => e.id === traderId);
    let message;

    if (index === -1) {
        message = "trader Not Found"
    } else {
        traderData[index].updatedDate = getCurrentDate();;
        traderData[index].states = 3;
        message = "trader Deleted Successfully"
    }
    ctx.body = message;
}

