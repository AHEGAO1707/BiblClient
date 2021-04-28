import React from "react";
import {Card} from 'antd';
import "../../css/card-book.css"
import './index.css'

type PropsType = {
    item: {
        book: {
            title: string
            author: string
            date_of_publishing: string
            taking_date: string
        }
        returning_date: string | null
        worker_id: string | number
    },
    key: any
}


const CardBook: React.FC<PropsType> = ({
                                           item,
                                           key}) => {

    return (
        <div className="card-book" key={key}>
            <Card title={item.book.title} bordered={false}>
                <p className="book_item">
                    Автор: <span style={{fontWeight: 'bold'}}>{item.book.author}</span>
                </p>
                <p className="book_item">
                    Год издания: <span style={{fontWeight: 'bold'}}>{item.book.date_of_publishing}</span>
                </p>
                <p className="book_item">
                    Библиотека: <span style={{fontWeight: 'bold'}}>{item.worker_id}</span>
                </p>
                <p className="book_item">
                    Вернуть до: <span style={{fontWeight: 'bold'}}>{item.returning_date}</span>
                </p>
            </Card>
        </div>
    )
}

export default CardBook
