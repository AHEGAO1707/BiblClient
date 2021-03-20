import React, {useEffect, useState} from "react";
import {Table, Button, Input, Select, Row, Col} from 'antd';
import "./index.css"
import {NavLink} from "react-router-dom";
import {getBooks, getLocationsRequest} from "../../api/books";

const {Option} = Select;

const {Search} = Input;

const columns = [
    {
        title: 'Номер книги',
        dataIndex: ['Book', 'book_id'],
    },
    {
        title: 'Название',
        dataIndex: ['Book', 'title'],
    },
    {
        title: 'Автор',
        dataIndex: ['Book', 'author'],
    },
    {
        title: 'Издательство',
        dataIndex: ['Book', 'publishing_house'],
    },
    {
        title: 'Год',
        dataIndex: ['Book', 'date_of_publishing'],
    },
    {
        title: 'Действие',
        key: 'action',
        render: (text: string, record: any) => {
            console.log("record", record)
            return (

                <Button type="primary">
                    <NavLink to={`/book/${record.Book.book_id}`}>
                        Посмот.
                    </NavLink>
                </Button>
            )
        },
    },
];


const ListBook = () => {

    const [locations, setLocations]: any = useState([])
    const [dataBooks, setDataBooks]: any = useState([])
    const [filter, setFilter]: any = useState("")


    useEffect(() => {
        getBooks().then((response) => {
            setDataBooks(response.data)
        })

        async function fetchLocationsBiblotek() {
            const {data} = await getLocationsRequest()
            const locat: any = []
            data.map((location: any) => {
                locat.push(<Option key={location.key} value={location.key}>{location.label}</Option>);
            })
            setLocations(locat)
        }

        fetchLocationsBiblotek()
    }, [])

    const onSearch = (searchValue: string) => {
        setFilter(searchValue)
    }

    function handleChange(value: string) {
        setFilter(value)
        console.log(`selected ${value}`);
    }


    return (

        <div>
            <Row>
                <Col span={10} offset={1}>
                    <Select
                        mode="multiple"
                        allowClear
                        style={{width: '100%'}}
                        placeholder="Выберите библиотеку"
                        onChange={handleChange}
                        className={"input-search-wrapper"}
                    >
                        {locations}
                    </Select>
                </Col>
                <Col span={10} offset={2}>
                    <Search
                        className={"input-search-wrapper"}
                        placeholder="Введите номер книги / название книги / автора / год выпуска / жанр"
                        onChange={(event) => onSearch(event.target.value)}
                    />
                </Col>
            </Row>
            <Table
                className={"table-list-book"}
                columns={columns}
                dataSource={dataBooks.filter((item: any) =>
                    item.Book.title.includes(filter) ||
                    item.Book.author.includes(filter) ||
                    item.Book.date_of_publishing.includes(filter)
                )}

            />
        </div>
    )
}

export default ListBook
