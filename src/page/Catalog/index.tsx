import React, {useEffect, useState} from "react";
import {Table, Button, Input, Select, Row, Col, Checkbox} from 'antd';
import "./index.css"
import {NavLink} from "react-router-dom";
import {getBooks, getLocationsRequest} from "../../api/books";
import CardBook from "../../components/CardBook";
import ListItem from "../../components/ListItem";

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

const xs = {span: 24, offset: 0}
const sm = {span: 11}


const Catalog = () => {

    const [locations, setLocations]: any = useState([])
    const [dataBooks, setDataBooks]: any = useState([])
    const [filter, setFilter]: any = useState("")
    const [filterLib, setFilterLib]: any = useState([])


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
        setFilterLib(value)
    }


    return (

        <div className={"ListBook"}>
            <Row className={"list-filter"}>
                <Col xs={xs} sm={sm}>
                    <Select
                        mode="multiple"
                        allowClear
                        style={{width: '100%', height: '40px'}}
                        placeholder="Выберите библиотеку"
                        onChange={handleChange}
                        size={"large"}
                        className={"input-search-wrapper"}
                    >
                        {locations}
                    </Select>
                </Col>
                <Col xs={xs} sm={sm}>
                    <Search
                        className={"input-search-wrapper"}
                        placeholder="Введите номер книги / название книги / автора / год выпуска / жанр"
                        onChange={(event) => onSearch(event.target.value)}
                        size={"large"}
                    />
                </Col>
                <Col xs={xs} sm={sm}>
                    {/*onChange={onChangeCheckbox}*/}
                    <Checkbox style={{color: '#55B432', fontSize: '17px', fontWeight: 'bold'}}>Выбрать только
                        свободные</Checkbox>
                </Col>
            </Row>
            <Table
                className={"table-list-book"}
                columns={columns}
                dataSource={dataBooks.filter((item: any) =>
                    (item.Book.title.includes(filter) ||
                        item.Book.author.includes(filter) ||
                        item.Book.date_of_publishing.includes(filter)) &&
                    (String(item.Book_example.location_id)).includes(filterLib)
                )}

            />
            <br/>
            <div className="list-book-cards">
                <ListItem
                    renderItem={(item: any) => (
                        <CardBook
                            data={item}
                        />
                    )}
                    data={dataBooks.filter((item: any) =>
                        (item.Book.title.includes(filter) ||
                            item.Book.author.includes(filter) ||
                            item.Book.date_of_publishing.includes(filter)) &&
                        (String(item.Book_example.location_id)).includes(filterLib)
                    )}
                    params={"Catalog"}
                />
            </div>
        </div>
    )
}

export default Catalog
