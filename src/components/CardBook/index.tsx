import React from "react";
import { Card } from 'antd';
import "../../css/card-book.css"

type PropsType = {
    data: any
}

const CardBook: React.FC<PropsType> = ({data}) => {
    return (
        <div className="card-book">
            <Card title={data.Book.title} bordered={false}>
                <p>
                    Автор: {data.Book.author}
                </p>
                <p>
                    Год издания: {data.Book.date_of_publishing}
                </p>
                {
                    data.Book_example.book_state_id === 1 ? (<span style={{color: '#55B432'}}>Свободна</span>) : <span style={{color: '#E63246'}}>Занята</span>
                }
            </Card>
        </div>
    )
}

export default CardBook
