import React from "react";
import {Card} from 'antd';
import "../../css/card-book.css"

type PropsType = {
    item: {
        book: {
            title: string
            author: string
            date_of_publishing: string
            returning_date: string | null
            worker_id: string | number
            taking_date: string
        }
    },
    key: any
}

const CardBook: React.FC<PropsType> = ({
                                           item,
                                           key}) => {

    return (
        <div className="card-book" key={key}>
            <Card title={item.book.title} bordered={false}>
                <p>
                    Автор: {item.book.author}
                </p>
                <p>
                    Год издания: {item.book.date_of_publishing}
                </p>
                <p>
                    Библиотека: {item.book.worker_id}
                </p>
                <p>
                    Вернуть до: {item.book.returning_date}
                </p>
            </Card>
        </div>
    )
}

export default CardBook
