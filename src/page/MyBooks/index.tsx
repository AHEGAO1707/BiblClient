import React, {useEffect, useState} from "react";
import { getOrdersRequest } from "../../api/books";
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
            <div className="list-book-cards list-my-book-cards">
                <Spinner status={listOrders.length > 0}>
                    {
                        listOrders.map((item: any) => (
                            <CardOrder item={item} key={item.taking_date}/>
                        ))
                    }
                </Spinner>
            </div>
        </div>
    )
}

export default MyBooks
