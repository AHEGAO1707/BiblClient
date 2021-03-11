import React from "react";
import './index.css'
import {Button, Tooltip} from "antd";
import { useHistory } from "react-router-dom";
import {connect} from "react-redux";
import {deleteBookCompilation} from "../../store/actions/book";
import { MinusOutlined, PlusOutlined   } from '@ant-design/icons';


type PropsType = {
    data: any
    selectedBook: (data: any) => void
    deleteBookCompilation: ( blanks_book_id: string ) => void
}

const CardAddBook: React.FC<PropsType> = ({ data, selectedBook, deleteBookCompilation }) => {

    let history = useHistory();
    const handleClick = () => {
        selectedBook(data)
        history.push("/form/add_book")
    }

    const handleClickDelete = () => {
        deleteBookCompilation(data.blanks_book_id)
    }

    return (
        <div className="cardAddBook">
            <div className="title">{data.title}</div>
            <div className="isbn_number">{data.isbn_number}</div>
            <div className="amount" style={{
                justifyContent: "flex-end"
            }}>
                                <span className="quantity">
                    {data.quantity}
                </span>

                <Tooltip title="уменьшить на 1">
                    <Button   shape="circle" style={{ border: "none",  marginLeft: 20}}  icon={<MinusOutlined
                        style={{
                            fontSize: 14,
                            paddingTop: 3,
                            color: "#f44336"
                        }}
                    />} />
                </Tooltip>
                <span style={{
                    fontSize: 25,
                    paddingBottom: 4,
                    color: "#99999945",
                    marginLeft: 5,
                    marginRight:5
                }}>
                    /
                </span>
                <Tooltip title="увеличить на 1">
                    <Button   shape="circle" style={{ border: "none", marginRight: 20}}  icon={<PlusOutlined
                        style={{
                            fontSize: 14,
                            paddingTop: 3,
                            color: "#4caf50"
                        }}  />} />
                </Tooltip>
            </div>
            <div className="status">status</div>
            <div className="edit">
                <Button type="primary" onClick={handleClick}>
                        Изменить
                </Button>
            </div>
            <div className="delete">
                <Button danger onClick={handleClickDelete}>
                    Удалить
                </Button>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        booksCompilation: state.book.booksCompilation
    }
};


export default connect(mapStateToProps, {
    deleteBookCompilation
})(CardAddBook);
