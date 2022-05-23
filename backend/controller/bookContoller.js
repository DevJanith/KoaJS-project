let books = [
    { id: 101, name: 'Fight Club', author: 'Chuck Palahniuk' },
    { id: 102, name: 'Sharp Objects', author: 'Gillian Flynn' },
    { id: 103, name: 'Frankenstein', author: 'Mary Shelley' },
    { id: 104, name: 'Into The Wild', author: 'John Krakauer' }
];


export const read = async function read(ctx) {
    try {
        ctx.body = books;
    } catch (error) {
        console.log(error)
    }
}

export const create = async function create(ctx) {
    const book = ctx.request.body;
    book.id = "01G27YFE5GFJCXFWHC0MWRNAJ8";
    try {
        books.push(book)
        ctx.body = "Data Create succefully"
    } catch (error) {
        console.log(error)
    }

}