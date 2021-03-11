import React, {useEffect, useState} from "react";
import {Button, Card, Col, Form, Input, Row} from "antd";
import {getBookRequest} from "../../api/books";
import "./index.css"

const xs = { span: 12, offset: 1 }
const lg = { span: 6, offset: 2 }

type PropsType = {
    match: any
}

const BookPage = ({match}: PropsType) => {

    const [form] = Form.useForm();

    const [dataBook, setDataBook]: any = useState([])

    useEffect(() => {
        getBookRequest(match.params.book_id).then((response) => {
            setDataBook(response.data.book)
        })
    }, [match.params.book_id])

    return(
            <Row >
                <Col xs={xs} lg={lg}>
                    <Card
                        hoverable
                        style={{ width: 340 }}
                        cover={<img alt="example" src={dataBook.url} />}
                    >
                    </Card>
                </Col>
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
                                <Input placeholder="ID Студента" />
                            </Form.Item>
                            <Form.Item label="Фамилия">
                                <Input placeholder="Фамилия" />
                            </Form.Item>
                            <Form.Item label="Имя">
                                <Input placeholder="Имя" />
                            </Form.Item>
                            <Form.Item >
                                <Button type="primary" htmlType="submit">Выдать</Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Col>
            </Row>

    )
}

export default BookPage
