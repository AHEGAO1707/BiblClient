import axios from 'axios'

import {
    SIGN_IN_ERROR,
    SIGN_IN_SUCCESS,
    SIGN_UP_ERROR,
    SIGN_UP_SUCCESS,

} from '../const/auth'
import {ThunkAction} from 'redux-thunk'
import {Action} from 'redux'


// РЕГИСТРАЦИЯ
interface DataSingUpType {
    email: string
    password: string
    role_id: number
}

export const signUp = (signUpData: DataSingUpType): ThunkAction<void, unknown, unknown, Action<string>> => async dispatch => {
    axios.post('https://apilibmospolytech.ru/auth/register', signUpData)
        .then((response) => {
            dispatch(singUpSuccess(true))
        }).catch((e) => {
        dispatch(singUpError(e))
    })
}

export function singUpSuccess(showSuccessMessage: boolean) {
    return {
        type: SIGN_UP_SUCCESS,
    }
}

export function singUpError(error: any) {
    const errorCode = error.message.slice(error.message.length - 3)
    let errorMessage

    if (errorCode === '409') {
        errorMessage = 'Пользователь с таким email уже существует.'
    } else if (errorCode === '500') {
        errorMessage = 'Ошибка сервера. Повторите попытку позже.'
    }
    return {
        type: SIGN_UP_ERROR,
        payload: {
            errorMessage,
            errorCode
        }
    }
}

// АВТОРИЗАЦИЯ
interface DataSingInType {
    email: string
    password: string
}

export const signIn = (signInData: DataSingInType): ThunkAction<void, unknown, unknown, Action<string>> => async dispatch => {
    axios.post('https://apilibmospolytech.ru/auth/login', signInData)
        .then((response) => {
            dispatch(singInSuccess(response.data.token))
        }).catch((e) => {
        dispatch(singInError(e))
    })

}

export function singInSuccess(token: string) {
    return {
        type: SIGN_IN_SUCCESS,
        payload: {
            token
        }
    }
}

export function singInError(error: any) {
    const errorCode = error.message.slice(error.message.length - 3)
    let errorMessage
    if (errorCode === '404') {
        errorMessage = 'Не правильно введен email или пароль.'
    } else if (errorCode === '500') {
        errorMessage = 'Ошибка сервера. Повторите попытку позже.'
    }
    return {
        type: SIGN_IN_ERROR,
        payload: {
            errorMessage,
            errorCode
        }
    }
}


