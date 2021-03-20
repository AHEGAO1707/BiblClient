import React, {useCallback, useEffect} from 'react'
import './index.css'
import {signIn} from '../../store/actions/auth'
import {connect, useDispatch} from 'react-redux'
import Cookies from "universal-cookie";
import {authClientRequest} from "../../api/books";


type PropsType = {
    match: any
}

interface DataType {
    email: string
    password: string
}

const cookies = new Cookies();

const Auth = ({match}: PropsType) => {
    useEffect(() => {
        authClientRequest(match.params.uid).then(r => {
            console.log(r)
        })
    }, [match.params.uid])

    return (
        <div className='Auth'>
            Происходит процедура авторизации
        </div>
    )
}

function mapStateToProps(state: any) {
    return {
        errorMessage: state.signUp.errorMessage,
        showSuccessMessage: state.signUp.showSuccessMessage
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        signIn: (values: DataType) => dispatch(signIn(values)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
