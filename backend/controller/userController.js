let data = [
    {
        "id": "01G27ZYCM3TNHTP0MJJBV90ZBZ",
        "name": "Jerry",
    },
    {
        "id": "01G27ZYN4XEHPZVAKN9CB6BFMA",
        "name": "Tom",
    }
]


export const read = async function read(ctx) {
    try {
        ctx.body = data;
    } catch (error) {
        console.log(error)
    }

}

export const create = async function create(ctx) {
    const user = ctx.request.body;
    user.id = "01G27YFE5GFJCXFWHC0MWRNAJ8";
    try {
        data.push(user)
        ctx.body = "Data Create succefully"
    } catch (error) {
        console.log(error)
    }
}

export const update = async function update(ctx) {
    let user = ctx.request.body;
    const index = data.findIndex((e) => e.id === user.id);
    let message;

    if (index === -1) {
        user.id = "01G27YS7QQ71DXNV5SMQCBZFGD";

        data.push(user)
        message = "Data Create succefully"
    } else {
        data[index] = user;
        message = "Data Updated succefully"
    }
    ctx.body = message;
}

export const deleteData = async function deleteData(ctx) {
    let user = ctx.request.body;
    const index = data.findIndex((e) => e.id === user.id);
    let message;

    if (index === -1) {
        message = "Data Not Found"
    } else {
        delete data[index];
        message = "Data Deleted succefully"
    }
    ctx.body = message;
}

