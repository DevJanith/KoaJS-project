import { getCurrentDate } from "../utility/date.js";
import { v4 as uuidv4 } from 'uuid';


let promotionData = [
    {
        "id": "1",
        "name": "hot hot Win",
        "type": "daily",
        "description": "Lorem Ipsum is simply dummy text",
        "itemID": "1",
        "createdDate": "2021/05/05",
        "updatedDate": "",
        "states": 1
    },
    {
        "id": "2",
        "type": "weekly",
        "name": "hot hot Win",
        "description": "Lorem Ipsum is simply dummy text",
        "itemID": "1",
        "createdDate": "2021/05/05",
        "updatedDate": "",
        "states": 1
    },
]


export const read = async function read(ctx) {
    try {
        ctx.body = promotionData.filter((e => e.states != 3));
    } catch (error) {
        console.log(error)
    }

}

export const create = async function create(ctx) {
    const promotion = ctx.request.body;
    try {

        promotion.id = uuidv4();
        promotion.createdDate = getCurrentDate();
        promotion.states = 1;

        if (promotion.type != null && promotion.description != null && promotion.itemID != null) {
            promotionData.push(promotion);
            ctx.body = "promotion Created Successfully";
        } else {
            ctx.body = "Required Field Empty";
        }

    } catch (error) {
        console.log(error)
    }
}

export const update = async function update(ctx) {
    var promotionId = ctx.params.id;
    let promotion = ctx.request.body;
    const index = promotionData.findIndex((e) => e.id === promotionId);
    let message;

    try {
        if (index === -1) {
            promotion.id = uuidv4();
            promotion.createdDate = getCurrentDate();
            promotion.states = 1;

            if (promotion.type != null && promotion.description != null && promotion.itemID != null) {
                promotionData.push(promotion);
                message = "promotion Created Successfully";
            } else {
                message = "Required Field Empty";
            }
        } else {
            promotion.updatedDate = getCurrentDate();
            promotion.states = 2;
            promotionData[index] = promotion;
            message = "promotion Updated Successfully"
        }
        ctx.body = message;
    } catch (error) {
        console.log(error)
    }

}

export const deleteData = async function deleteData(ctx) {
    const promotionId = ctx.params.id
    const index = promotionData.findIndex((e) => e.id === promotionId);
    let message;

    if (index === -1) {
        message = "promotion Not Found"
    } else {
        promotionData[index].updatedDate = getCurrentDate();;
        promotionData[index].states = 3;
        message = "promotion Deleted Successfully"
    }
    ctx.body = message;
}

