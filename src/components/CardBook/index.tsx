import React from "react";
import './index.css'
import {Card} from 'antd';


type PropsType = {
    data: any
}

const CardBook: React.FC<PropsType> = ({data}) => {
    return (
        <div className="CardBook">
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
