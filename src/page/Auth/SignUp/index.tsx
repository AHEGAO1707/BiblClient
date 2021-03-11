import React, {useCallback} from 'react'
import './index.css'
import {Formik} from 'formik'
import * as yup from 'yup'
import {connect, useDispatch} from 'react-redux'
import {signUp} from '../../../store/actions/auth'
import Input from '../../../components/UI/Input'
import Button from '../../../components/UI/Button/Button'

type PropsType = {
    errorMessage: string
    showSuccessMessage: boolean
    errorCode: string
}


const SignUp = (props: PropsType) => {
    const validationSchema = yup.object().shape({
        email: yup.string().typeError('Должно быть строкой').required('Обязательное поле').email('Введите корректный email'),
        password: yup.string().typeError('Должно быть строкой').required('Обязательное поле').min(4, 'Минимальная длина пароля 4 символа'),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Обязательное поле').min(4, 'Минимальная длина пароля 4 символа'),
    })

    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, [dispatch]);

    return (
        <div className='SignUp'>
            <Formik initialValues={{
                email: '',
                password: '',
                confirmPassword: '',
            }}
                    validateOnBlur
                    validationSchema={validationSchema}
                    onSubmit={async (values) => {
                        const signUpData = {
                            email: values.email,
                            password: values.password,
                            role_id: 1,
                        }
                        stableDispatch(signUp(signUpData))
                        if (props.errorCode === '') {
                            values.email = ''
                            values.password = ''
                            values.confirmPassword = ''
                        }
                    }}
            >
                {
                    ({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                        <div>
                            <h1>Добавление сотрудника</h1>
                            <form>
                                <Input type={'email'} name={'email'} label={'Email'} value={values.email}
                                       onChange={handleChange} onBlur={handleBlur}
                                       touched={touched.email} errors={errors.email} dirty={dirty}
                                />

                                <Input type={'password'} name={'password'} label={'Придумайте пароль'}
                                       value={values.password} onChange={handleChange} onBlur={handleBlur}
                                       touched={touched.password} errors={errors.password}
                                />

                                <Input type={'password'} name={'confirmPassword'} label={'Подтвердите пароль'}
                                       value={values.confirmPassword} onChange={handleChange}
                                       onBlur={handleBlur}
                                       touched={touched.confirmPassword} errors={errors.confirmPassword}
                                />
                                <Button styleType={'primary'}
                                        type={'submit'}
                                        onClick={handleSubmit}
                                >
                                    Добавить
                                </Button>
                                {(props.errorMessage !== null) ? <p className='error'>{props.errorMessage}</p> : null}
                                {(props.showSuccessMessage) ?
                                    <p className='success'>Пользователь успешно создан</p> : null}
                            </form>
                        </div>
                    )
                }
            </Formik>
        </div>
    )
}

function mapStateToProps(state: any) {
    return {
        errorMessage: state.signUp.errorMessage,
        showSuccessMessage: state.signUp.showSuccessMessage
    }
}

interface DataType {
    email: string
    password: string
    role_id: number
}

function mapDispatchToProps(dispatch: any) {
    return {
        signUp: (values: DataType) => dispatch(signUp(values)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
