import React, {useEffect, useState} from "react";
import {Table, Button, Input} from 'antd';
import "./index.css"
import {NavLink} from "react-router-dom";
import {getBooks} from "../../api/books";
const { Search } = Input;

const columns = [
    {
        title: 'Номер книги',
        dataIndex: 'book_id',
    },
    {
        title: 'Название',
        dataIndex: 'title',
    },
    {
        title: 'Автор',
        dataIndex: 'author',
    },
    {
        title: 'Издательство',
        dataIndex: 'publishing_house',
    },
    {
        title: 'Год',
        dataIndex: 'date_of_publishing',
    },
    {
        title: 'Действие',
        key: 'action',
        render: (text:string, record:any) => {
            return (

                <Button type="primary" >
                    <NavLink to={`/book/${record.book_id}`}>
                        Посмот.
                    </NavLink>
                </Button>
            )
        },
    },
];





const ListBook = () => {

    const [dataBooks, setDataBooks]: any = useState([])

    const [filter, setFilter]:any = useState("")



    useEffect(() => {
        getBooks().then((response) => {
                setDataBooks(response.data)
            })

    }, [])

    const onSearch = (searchValue: string) =>{
        setFilter(searchValue)
    }


    return(

        <div>
            <div className="input-search-wrapper">
                <Search
                    placeholder="Введите номер книги / название книги / автора / год выпуска / жанр"
                    onChange={(event) => onSearch(event.target.value)}
                     />
            </div>
            <Table columns={columns} dataSource={dataBooks.filter((item:any) => item.title.includes(filter))} />
        </div>
    )
}

export default ListBook
