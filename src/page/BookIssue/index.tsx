import React, {useEffect, useState} from "react";
import {Button, Col, Form, Input, notification, Row} from "antd";
import {getBookRequest, addOrderRequest} from "../../api/books";
import "./index.css"
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";

const xs = { span: 12, offset: 1 }
const lg = { span: 6, offset: 2 }

type PropsType = {
    match: any,
    booksIssue: any
}

const BookIssue: React.FC<PropsType> = ({ match, booksIssue }) => {

    let history = useHistory()

    const [form] = Form.useForm();

    const [dataBook, setDataBook]: any = useState([])

    const [valueForm, setValueForm] = useState("")

    const handleClickIssueBook = () => {
        addOrderRequest(booksIssue, Number(valueForm))
        setValueForm(" ")
        notification["success"]({
            message: 'Книга успешно выдана'
        });
        history.push("/")

    }

    useEffect(() => {
        getBookRequest(match.params.book_id).then((response) => {
            setDataBook(response.data.book)
        })
    }, [match.params.book_id])

    return(
            <Row >
                <Col xs={xs} lg={lg}>

                    <div className="props-list">
                        <h1>{dataBook.title}</h1>
                        <dl className="main-props">
                            <dt className="ng-star-inserted">Издательство</dt>
                            <dd className="ng-star-inserted">{dataBook.publishing_house}</dd>
                            <dt className="ng-star-inserted">ISBN</dt>
                            <dd className="ng-star-inserted">{dataBook.isbn_number}</dd>
                            <dt className="ng-star-inserted">Год</dt>
                            <dd className="ng-star-inserted">{dataBook.date_of_publishing}</dd>
                            <dt className="ng-star-inserted">Индекс УДК</dt>
                            <dd className="ng-star-inserted">{dataBook.index_udk}</dd>
                            <dt className="ng-star-inserted">Страниц</dt>
                            <dd className="ng-star-inserted">{dataBook.amount}</dd>
                            <dt className="ng-star-inserted">Тираж</dt>
                            <dd className="ng-star-inserted">{dataBook.tirazh}</dd>
                        </dl>

                    </div>

                </Col>
                <Col xs={xs} lg={lg}>
                    <div className="form-book">
                        <Form
                            form={form}
                            initialValues={{ layout: 'vertical' }}
                            layout={'vertical'}
                        >
                            <Form.Item label="ID Студента">
                                <Input
                                    placeholder="ID Студента"
                                    value={valueForm}
                                    onChange={(event) => setValueForm(event.target.value)}
                                />
                            </Form.Item>
                            <Form.Item >
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    onClick={handleClickIssueBook}
                                    value={valueForm}
                                >Выдать</Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Col>
            </Row>

    )
}

const mapStateToProps = (state: any) => {
    return {
        booksIssue: state.book.booksIssue
    }
};

export default connect(mapStateToProps, {
})(BookIssue);

