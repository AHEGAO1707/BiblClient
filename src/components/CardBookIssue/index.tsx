import React from "react";
import './index.css'


type PropsType = {
    data: any
}

const CardBookIssue: React.FC<PropsType> = ({ data }) => {
    return (
        <div className="CardBookIssue">
            <div className="">
                <span>
                    {data.book.title}
                </span>
            </div>
            <div className="author">
                <span>
                    {data.book.author}
                </span>
            </div>
            <div className="book_status">
                <span className="statusIssue">
                    {data.book_status}
                </span>
            </div>
        </div>
    )
}

export default CardBookIssue
