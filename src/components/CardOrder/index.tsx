import React from "react";
import {Card} from 'antd';
import "../../css/card-book.css"

type PropsType = {
    item: {
        order_id : number,
        book: {
            title: string
            author: string
            date_of_publishing: string
            returning_date: string | null
            worker_id: string | number
            taking_date: string
        },
        status: string;
    },
    key: any
}

const CardBook: React.FC<PropsType> = ({
                                           item,
                                           key
                                       }) => {

    return (
        <div className="card-book card-book_a" key={key}>
            <Card title={item.book.title} bordered={false}>
                <p>
                    Номер заказа: {item.order_id}
                </p>
                <p>
                    Автор: {item.book.author}
                </p>
                {
                    item.status === "active" ? (<p style={{color: '#55B432'}}>Активный</p>) :
                        <p style={{color: "lightsalmon"}}>В архиве</p>
                }
            </Card>
        </div>
    )
}

export default CardBook
