import React, {useEffect, useState} from "react";
import {getOrdersRequest} from "../../api/books";
import CardOrder from "../../components/CardOrder";
import Spinner from "../../components/Spinner";
import "./index.css"

const MyBooks = () => {

    const [listOrders, setListOrders] = useState<[]>([])

    useEffect(() => {
        (async () => {
            const res = await getOrdersRequest()
            setListOrders(res.data)
        })()
    }, [])

    return (
        <div className={"ListBook"}>
            <Spinner status={listOrders.length > 0}>
                <h1 className="my-book-header">Активные заказы</h1>
                <div className="list-book-cards list-my-book-cards">
                    {
                        listOrders.map((item: any) => (
                            item.status === "active" ?
                                <CardOrder item={item} key={item.taking_date}/> : null
                        ))
                    }
                </div>
                <h1 className="my-book-header">Заказы в архиве</h1>
                <div className="list-book-cards list-my-book-cards">
                    {
                        listOrders.map((item: any) => (
                            item.status === "archive" ?
                                <CardOrder item={item} key={item.taking_date}/> : null
                        ))
                    }
                </div>
            </Spinner>
        </div>
    )
}

export default MyBooks
