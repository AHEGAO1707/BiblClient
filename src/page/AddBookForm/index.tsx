import React from "react";
import {Formik} from "formik";
import { Input, Form } from 'antd';
import Button from "../../components/UI/Button/Button";
import './index.css'
import {connect} from "react-redux";
import { addBookCompilation } from "../../store/actions/book";
import { useHistory } from "react-router-dom";

interface FormValues {
    isbn_number: number | undefined;
    tirazh: number | undefined;
    author: string | undefined;
    title: string | undefined;
    physical_carier: string | undefined;
    partNumber: number | undefined;
    part_name: string | undefined;
    publishing_house: string | undefined;
    date_of_publishing: number | undefined;
    amount: number | undefined;
    is_any_illustration: string | undefined;
    index_udk: number | undefined;
    keywords: string[] | undefined
}

type PropsType = {
    selectedBook: any
    addBookCompilation: ( data: any) => void
}


const AddBookForm: React.FC<PropsType> = ({ selectedBook, addBookCompilation }) => {

    let history = useHistory()

    const initialValues: FormValues = {
        isbn_number: undefined,
        tirazh: undefined,
        author: undefined,
        title: undefined,
        physical_carier: undefined,
        partNumber: undefined,
        part_name: undefined,
        publishing_house: undefined,
        date_of_publishing: undefined,
        amount: undefined,
        is_any_illustration: undefined,
        index_udk: undefined,
        keywords: undefined
    }

    // const validationSchema = yup.object().shape({
    //     isbn_number: yup.number().typeError('Должно быть в виде чисел').required('Обязательное поле'),
    //     tirazh: yup.number().typeError('Должно быть в виде чисел').required('Обязательное поле'),
    //     author: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
    //     title: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
    //     physical_carier: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
    //     partNumber: yup.number().typeError('Должно быть в виде чисел').required('Обязательное поле'),
    //     part_name: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
    //     publishing_house: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
    //     date_of_publishing: yup.number().typeError('Должно быть в виде чисел').required('Обязательное поле'),
    //     amount: yup.number().typeError('Должно быть в виде чисел').required('Обязательное поле'),
    //     is_any_illustration: yup.string().required('Обязательное поле'),
    //     index_udk: yup.number().typeError('Должно быть в виде чисел').required('Обязательное поле'),
    //     keywords: yup.array().typeError('Должно быть строкой').required('Обязательное поле'),
    // })



    return (
        <div className='add-book-form-container'>
            <h1>Добавление книги</h1>
            <Formik
                initialValues={ {...initialValues,...selectedBook} }

                onSubmit={(values) => {
                    const addBookData = {
                        isbn_number: values.isbn_number,
                        tirazh: values.tirazh,
                        author: values.author,
                        title: values.title,
                        physical_carier: values.physical_carier,
                        partNumber: values.partNumber,
                        part_name: values.part_name,
                        publishing_house: values.publishing_house,
                        date_of_publishing: values.date_of_publishing,
                        amount: values.amount,
                        is_any_illustration: values.is_any_illustration,
                        index_udk: values.index_udk,
                        keywords: values.keywords,
                    }

                    addBookCompilation(addBookData)
                    console.log('addBookData',addBookData)
                    history.push("/add_book")
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                  }) => (
                    <Form onFinish={handleSubmit} className='add-book-form' method="POST" layout={'vertical'}>
                        <div className="block_form">
                            <div className="block_form_input">
                                <Form.Item label="Номер Isbn" >
                                    <Input
                                        name={'isbn_number'}
                                        value={values.isbn_number}
                                        placeholder={"Введите номер isbn"}
                                        onChange={handleChange}
                                    />
                                </Form.Item>
                                <Form.Item label="Тираж" >
                                    <Input
                                    type={'text'}
                                    name={'tirazh'}
                                    value={values.tirazh}
                                    placeholder={"Введите тираж"}
                                    onChange={handleChange}
                                    />
                                </Form.Item>
                                <Form.Item label="Автор" >
                                    <Input
                                        name={'author'}
                                        value={values.author} placeholder={"Введите имя автора"}
                                        onChange={handleChange}
                                    />
                                </Form.Item>
                                <Form.Item label="Название книги" >
                                    <Input
                                        name={'title'}
                                        value={values.title}
                                        placeholder={"Введите заглавие"}
                                        onChange={handleChange}
                                    />
                                </Form.Item>
                                <Form.Item label="Тип носителя" >
                                    <Input
                                        name={'physical_carier'}
                                        value={values.physical_carier}
                                        placeholder={"Введите тип физического носителя"}
                                        onChange={handleChange}
                                    />
                                </Form.Item>
                                <Form.Item label="Номер части" >
                                    <Input
                                        name={'physical_carier'}
                                        value={values.physical_carier}
                                        placeholder={"Введите тип физического носителя"}
                                        onChange={handleChange}
                                    />
                                </Form.Item>
                                <Form.Item label="Название части" >
                                    <Input
                                        name={'part_name'}
                                        value={values.part_name}
                                        placeholder={"Введите название части"}
                                        onChange={handleChange}
                                    />
                                </Form.Item>
                            </div>
                            <div className="block_form_input">
                                <Form.Item label="Наименование издательства" >
                                    <Input
                                        name={'publishing_house'}
                                        value={values.publishing_house}
                                        placeholder={"Введите наименование издательства"}
                                        onChange={handleChange}
                                    />
                                </Form.Item>
                                <Form.Item label="Дата издания" >
                                    <Input
                                        name={'date_of_publishing'}
                                        value={values.date_of_publishing}
                                        placeholder={"Введите дату издания книги"}
                                        onChange={handleChange}
                                    />
                                </Form.Item>
                                <Form.Item label="Объём" >
                                    <Input
                                        name={'amount'}
                                        value={values.amount}
                                        placeholder={"Введите объём (стр.)"}
                                        onChange={handleChange}
                                    />
                                </Form.Item>
                                <Form.Item label="Наличие илюстраций" >
                                    <Input
                                        name={'is_any_illustration'}
                                        value={values.is_any_illustration}
                                        placeholder={"Имеются ли иллюстрации?"}
                                        onChange={handleChange}
                                    />
                                </Form.Item>
                                <Form.Item label="Индекс УДК" >
                                    <Input
                                        name={'index_udk'}
                                        value={values.index_udk}
                                        placeholder={"Введите индекс УДК"}
                                        onChange={handleChange}
                                    />
                                </Form.Item>
                                <Form.Item label="Ключевые слова" >
                                    <Input
                                        name={'keywords'}
                                        value={values.keywords}
                                        placeholder={"Введите через запятую ключевые слова"}
                                        onChange={handleChange}
                                    />
                                </Form.Item>
                            </div>
                        </div>
                        <Button
                            styleType={'add-book-form-btn'}
                            type={'submit'}
                            onClick={() => {}}
                        >
                            Сохранить
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        selectedBook: state.book.selectedBook
    }
};

export default connect(mapStateToProps, {addBookCompilation})(AddBookForm);



