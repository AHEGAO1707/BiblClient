import * as actions from "../const/book"
import * as apiBook from "../../api/books";


/**
 * добавить КНИГИ и экземпляры книг
 * action: getBookCompilationTrade
 */
export const addExamplesBooks = (data: any[]) => {
    return (dispatch: any) => {
        dispatch({
            type: actions.ADD_EXAMPLES_BOOKS_REQUEST,
        });
        apiBook.addExamplesBooksRequest(data)
            .then((response) => {
                dispatch({
                    type: actions.ADD_EXAMPLES_BOOKS_REQUEST_SUCCESS,
                    payload: [response.data]
                });
            })
            .catch((error) => {
                dispatch({
                    type: actions.ADD_EXAMPLES_BOOKS_REQUEST_ERROR,
                });
            })
    }
};


/**
 * удаление книги из списка добавления
 * action: getBookCompilationTrade
 */
export const deleteBookCompilation = (blanks_book_id: string) => {
    console.log('blanks_book_id a', blanks_book_id)
    return (dispatch: any) => {
        dispatch({
            type: actions.DELETE_BOOK_COMPILATION_REQUEST,
        });
        apiBook.deleteBookCompilationRequest(blanks_book_id)
            .then((response) => {
                dispatch({
                    type: actions.DELETE_BOOK_COMPILATION_REQUEST_SUCCESS,
                    payload: {
                        blanks_book_id: blanks_book_id
                    }
                });
            })
            .catch((error) => {
                dispatch({
                    type: actions.DELETE_BOOK_COMPILATION_REQUEST_ERROR
                });
            })
    }
};

/**
 * добавить даные данные о книге из формы
 * action: getBookCompilationTrade
 */
export const addBookCompilation = (data: any[]) => {
    return (dispatch: any) => {
        dispatch({
            type: actions.ADD_BOOK_COMPILATION_REQUEST,
        });
        apiBook.addBookCompilationRequest(data)
            .then((response) => {
                dispatch({
                    type: actions.ADD_BOOK_COMPILATION_REQUEST_SUCCESS,
                    payload: [response.data]
                });
            })
            .catch((error) => {
                dispatch({
                    type: actions.ADD_BOOK_COMPILATION_REQUEST_ERROR,
                });
            })
    }
};
/**
 *  выбор книги для изменения
 *  action: selectedBook
 */
export const selectedBook = (book: any) => {
    return {
        type: actions.SELECTED_BOOK,
        payload: book
    }
};

/**
 * получить данные о всех книгах в списке добавления
 * action: getBookCompilation
 */
export const getBookCompilation = () => {
    return (dispatch: any) => {
        dispatch({
            type: actions.GET_BOOK_COMPILATION_REQUEST,
        });
        apiBook.getBooksCompilationRequest()
            .then((response) => {
                dispatch({
                    type: actions.GET_BOOK_COMPILATION_REQUEST_SUCCESS,
                    payload: response.data
                });
            })
            .catch((error) => {
                dispatch({
                    type: actions.GET_BOOK_COMPILATION_REQUEST_ERROR,
                });
            })
    }
};

/**
 * добавить даные данные о книге по торговому коду
 * action: getBookCompilationTrade
 */
export const addBookCompilationTrade = (data: {trade_code:string}) => {
    return (dispatch: any) => {
        dispatch({
            type: actions.ADD_BOOK_COMPILATION_TRADE_REQUEST,
        });

        apiBook.addBookCompilationTradeRequest(data)
            .then((response) => {
                dispatch({
                    type: actions.ADD_BOOK_COMPILATION_TRADE_REQUEST_SUCCESS,
                    payload: response.data
                });
            })
            .catch((error) => {
                dispatch({
                    type: actions.ADD_BOOK_COMPILATION_TRADE_REQUEST_ERROR,
                });
            })
    }
};


/**
 * получить статус книги по book_example_id
 * action: getBookStatus
 */
export const getBookStatus = (bookExampleId: number) => {
    return (dispatch: any) => {
        dispatch({
            type: actions.GET_BOOK_STATUS_REQUEST,
        });
        apiBook.getBookStatusRequest(bookExampleId)
            .then((response) => {
                if (response.data.book_status === "На руках"){
                    dispatch({
                        type: actions.GET_BOOK_STATUS_REQUEST_SUCCESS,
                        payload: response.data
                    });
                } else {
                    dispatch({
                        type: actions.GET_BOOK_STATUS_ISSUE_REQUEST_SUCCESS,
                        payload: response.data
                    });
                }
            })
            .catch((error) => {
                dispatch({
                    type: actions.GET_BOOK_STATUS_REQUEST_ERROR,
                });
            })
    }
};

export const closeOrder = (bookExampleId: number) => {
    return (dispatch: any) => {
        dispatch({
            type: actions.CLOSE_ORDER_REQUEST,
        });

        apiBook.deleteOrderRequest(bookExampleId)
            .then((response) => {
                dispatch({
                    type: actions.CLOSE_ORDER_REQUEST_SUCCESS,
                    payload: response.data
                });
            })
            .catch((error) => {
                dispatch({
                    type: actions.CLOSE_ORDER_REQUEST_ERROR,
                });
            })
    }
}


/**
 * получить данные о книге по коду isbn
 * action: getBookCompilationTrade
 */
// export const getBookCompilationIsbn = (data: {isbn_number:string}) => {
//     return (dispatch: any) => {
//         dispatch({
//             type: actions.GET_BOOK_COMPILATION_REQUEST,
//         });
//         apiBook.getBookCompilationIsbnRequest(data)
//             .then((response) => {
//                 dispatch({
//                     type: actions.GET_BOOK_COMPILATION_REQUEST_SUCCESS,
//                     payload: response.data
//                 });
//             })
//             .catch((error) => {
//                 dispatch({
//                     type: actions.GET_BOOK_COMPILATION_REQUEST_ERROR,
//                 });
//             })
//     }
// };
