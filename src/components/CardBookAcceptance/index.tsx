import React from "react";
import './index.css'


type PropsType = {
    data: any
}

const CardBookAcceptance: React.FC<PropsType> = ({ data }) => {
    return (
        <div className="CardBookAcceptance">
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
                <span className="statusAcceptance">
                    {data.book_status}
                </span>
            </div>
        </div>
            )
}

export default CardBookAcceptance
