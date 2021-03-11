import * as actions from '../../const/book'

const defaultState = {
    request_status:{
        bookCompilation: null,
        booksAcceptance: null,
        booksOrdersClose: null
    },
    booksCompilation: [],
    booksAcceptance: [],
    booksIssue: [],
    selectedBook: null
}

type ActionType = {
    type: string
    payload: any
}

export default function bookReducer(state = defaultState, action: ActionType) {
    switch (action.type) {
        case actions.SELECTED_BOOK:
            console.log('action.payload',action.payload)
            return {
                ...state,
                selectedBook: action.payload
            }

/** ***********************************/
        case actions.GET_BOOK_COMPILATION_REQUEST:
            return {
                ...state,
                request_status: {...state.request_status, bookCompilation: "request"},
            }
        case actions.GET_BOOK_COMPILATION_REQUEST_SUCCESS:

            return {
                ...state,
                request_status: {...state.request_status, bookCompilation: "success"},
                booksCompilation: action.payload
            }
        case actions.GET_BOOK_COMPILATION_REQUEST_ERROR:
            return {
                ...state,
                request_status: {...state.request_status, bookCompilation: "error"},
            }

/** ***********************************/
        case actions.ADD_BOOK_COMPILATION_REQUEST:
            return {
                ...state,
                request_status: {...state.request_status, bookCompilation: "request"},
            }
        case actions.ADD_BOOK_COMPILATION_REQUEST_SUCCESS:
            return {
                ...state,
                request_status: {...state.request_status, bookCompilation: "success"},
                booksCompilation: [...state.booksCompilation, ...action.payload]
            }
        case actions.ADD_BOOK_COMPILATION_REQUEST_ERROR:
            return {
                ...state,
                request_status: {...state.request_status, bookCompilation: "error"},
            }

/** ***********************************/
        case actions.DELETE_BOOK_COMPILATION_REQUEST:
            return {
                ...state,
                request_status: {...state.request_status, bookCompilation: "request"},
            }
        case actions.DELETE_BOOK_COMPILATION_REQUEST_SUCCESS:
            let result_delete_book: any = []
            if (action.payload.blanks_book_id && state.booksCompilation.length !== 0){
                let index_delete_book = state.booksCompilation.findIndex((item: any) =>
                    item.blanks_book_id === action.payload.blanks_book_id
                )
                result_delete_book = [
                    ...state.booksCompilation.slice(0, index_delete_book),
                    ...state.booksCompilation.slice(index_delete_book + 1)
                ]
            }

            return {
                ...state,
                request_status: {...state.request_status, bookCompilation: "success"},
                booksCompilation: result_delete_book
            }
        case actions.DELETE_BOOK_COMPILATION_REQUEST_ERROR:
            return {
                ...state,
                request_status: {...state.request_status, bookCompilation: "error"},
            }

/** ***********************************/
        case actions.ADD_EXAMPLES_BOOKS_REQUEST:
            return {
                ...state,
                request_status: {...state.request_status, bookCompilation: "request"},
            }
        case actions.ADD_EXAMPLES_BOOKS_REQUEST_SUCCESS:

            return {
                ...state,
                request_status: {...state.request_status, bookCompilation: "success"},
                booksCompilation: []
            }
        case actions.ADD_EXAMPLES_BOOKS_REQUEST_ERROR:
            return {
                ...state,
                request_status: {...state.request_status, bookCompilation: "error"},
            }

/** ***********************************/
        case actions.ADD_BOOK_COMPILATION_TRADE_REQUEST:
            return {
                ...state,
                request_status: {...state.request_status, bookCompilation: "request"},
            }
        case actions.ADD_BOOK_COMPILATION_TRADE_REQUEST_SUCCESS:

            let isValue = state.booksCompilation
                .some((item: any) => item.blanks_book_id === action.payload.CompBook.blanks_book_id)
            let result = []

            result = [...state.booksCompilation, action.payload.CompBook]

            if (isValue){
                result = state.booksCompilation.map((item: any) => {
                    if (item.blanks_book_id === action.payload.CompBook.blanks_book_id){
                        return action.payload.CompBook
                    }
                    return item
                })
            }
            return {
                ...state,
                request_status: {...state.request_status, bookCompilation: "success"},
                booksCompilation: result
            }
        case actions.ADD_BOOK_COMPILATION_TRADE_REQUEST_ERROR:
            return {
                ...state,
                request_status: {...state.request_status, bookCompilation: "error"},
            }

/** ***********************************/
        case actions.GET_BOOK_STATUS_REQUEST:
            return {
                ...state,
                request_status: {...state.request_status, booksAcceptance: "request"},
            }
        case actions.GET_BOOK_STATUS_REQUEST_SUCCESS:
            return {
                ...state,
                request_status: {...state.request_status, booksAcceptance: "success"},
                booksAcceptance: [...state.booksAcceptance, action.payload]
            }
        case actions.GET_BOOK_STATUS_ISSUE_REQUEST_SUCCESS:
            return {
                ...state,
                request_status: {...state.request_status, booksIssue: "success"},
                booksIssue: [...state.booksIssue, action.payload]
            }
        case actions.GET_BOOK_STATUS_REQUEST_ERROR:
            return {
                ...state,
                request_status: {...state.request_status, booksAcceptance: "error"},
            }

        /** ***********************************/
        case actions.CLOSE_ORDER_REQUEST:
            return {
                ...state,
                request_status: {...state.request_status, booksOrdersClose: "request"},
            }
        case actions.CLOSE_ORDER_REQUEST_SUCCESS:
            return {
                ...state,
                request_status: {...state.request_status, booksOrdersClose: "success"},
                booksAcceptance: []
            }
        case actions.CLOSE_ORDER_REQUEST_ERROR:
            return {
                ...state,
                request_status: {...state.request_status, booksOrdersClose: "error"},
            }


        default:
            return state
    }
}
