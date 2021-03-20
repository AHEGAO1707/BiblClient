import Api from "../index"

export const getBooks = async () => {
    return await Api.get(`/books/all`)
};

export const getBookRequest = async (book_id: Number) => {
    return await Api.post(`/books/getBookWithParams`, {book_id: book_id})
};


export const getBooksCompilationRequest = async () => {
    return await Api.get(`/bookCompilation/getCompBooks`)
};


export const addBookCompilationRequest = async (data: any) => {
    return await Api.post(`/bookCompilation/addCompBook`, data)
};


export const addBookCompilationTradeRequest = async (data: {trade_code:string}) => {
    return await Api.post(`/bookCompilation/getTradeKod`, data)
};


export const getBookCompilationIsbnRequest = async (data: {isbn_number:string}) => {
    return await Api.post(`/bookCompilation/getBookIsbn`, data)
};


export const deleteBookCompilationRequest = async (blanks_book_id: string) => {
    console.log('blanks_book_id r', blanks_book_id)
    return await Api.delete(`/bookCompilation/deleteCompBooks`, { blanks_book_id: blanks_book_id })
};


export const addExamplesBooksRequest = async (data: any) => {
    return await Api.post(`/books/addExamplesBooks`, data)
};


export const updateBookRequest = async (id: any, data: any) => {
    return await Api.put(`/book/${id}`, data)
};


export const getBookStatusRequest = async (book_example_id: Number) => {
    return await Api.get(`/booksExample/status/${book_example_id}`)
};


export const addOrderRequest = async (data: any, client_id: Number) => {
    return await Api.post(`/orders/addOrder/${client_id}`, data)
};


export const deleteOrderRequest = async (book_example_id: Number) => {
    console.log("book_example_", book_example_id)
    return await Api.get(`/orders/closeOrder/${book_example_id}`)
};

export const getLocationsRequest = async () => {
    return await Api.get('/locations/allLocations')
};

export const authClientRequest = async (uid: String) => {
    console.log("uid", uid)
    return await Api.post('/auth/client', {uid})
};
