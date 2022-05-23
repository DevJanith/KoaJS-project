import { getCurrentDate } from "../utility/date.js";
import { v4 as uuidv4 } from 'uuid';


let customerData = [
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
        ctx.body = customerData.filter((e => e.states != 3));
    } catch (error) {
        console.log(error)
    }

}

export const create = async function create(ctx) {
    const customer = ctx.request.body;
    try {

        customer.id = uuidv4();
        customer.createdDate = getCurrentDate();
        customer.states = 1;

        if (customer.id != null && customer.name != null && customer.contactNo != null && customer.address != null && customer.email != null) {
            customerData.push(customer);
            ctx.body = "Customer Created Successfully";
        } else {
            ctx.body = "Required Field Empty";
        }

    } catch (error) {
        console.log(error)
    }
}

export const update = async function update(ctx) {
    var customerId = ctx.params.id;
    let customer = ctx.request.body;
    const index = customerData.findIndex((e) => e.id === customerId);
    let message;

    try {
        if (index === -1) {
            customer.id = uuidv4();
            customer.createdDate = getCurrentDate();
            customer.states = 1;

            if (customer.id != null && customer.name != null && customer.contactNo != null && customer.address != null && customer.email != null) {
                customerData.push(customer);
                message = "Customer Created Successfully";
            } else {
                message = "Required Field Empty";
            }
        } else {
            customer.updatedDate = getCurrentDate();
            customer.states = 2;
            customerData[index] = customer;
            message = "Customer Updated Successfully"
        }
        ctx.body = message;
    } catch (error) {
        console.log(error)
    }

}

export const deleteData = async function deleteData(ctx) {
    const customerId = ctx.params.id
    const index = customerData.findIndex((e) => e.id === customerId);
    let message;

    if (index === -1) {
        message = "Customer Not Found"
    } else {
        customerData[index].updatedDate = getCurrentDate();;
        customerData[index].states = 3;
        message = "Customer Deleted Successfully"
    }
    ctx.body = message;
}

