import { ThunkAction } from 'redux-thunk'
import { Action }  from 'redux'
import axios from "axios";
import { ADD_BOOK_SUCCESS, ADD_BOOK_ERROR } from '../const/add'

interface DataAddBookType {
    isbn: number;
    edition: number;
    author: string;
    title: string;
    physicalMedium: string;
    partNumber: number;
    partTitle: string;
    publisher: string;
    dateOfIssue: number;
    size: number;
    illustrations: boolean;
    indexUDC: number;
    mainWords: string[]
}

export const addBook = (addBookData: DataAddBookType): ThunkAction<void, unknown, unknown, Action<string>> => async dispatch => {
    axios.post('https://apilibmospolytech.ru/books/addExampleBook', addBookData)
        .then((response) => {
            dispatch(addBookSuccess(true))
        }).catch((e) => {
        dispatch(addBookError(e))
    })
}

export function addBookSuccess(showSuccessMessage: boolean) {
    return {
        type: ADD_BOOK_SUCCESS,
    }
}

export function addBookError(error: any) {
    const errorCode = error.message.slice(error.message.length - 3)
    let errorMessage

    if (errorCode === '409') {
        errorMessage = 'Данная книга уже имеется в базе.'
    } else if (errorCode === '500') {
        errorMessage = 'Ошибка сервера. Повторите попытку позже.'
    }
    return {
        type: ADD_BOOK_ERROR,
        payload: {
            errorMessage,
            errorCode
        }
    }
}
