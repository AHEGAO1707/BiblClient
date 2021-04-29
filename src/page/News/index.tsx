import React, {useEffect, useState} from "react";
import {getNewsRequest} from "../../api/books";
import CardNews from "../../components/CardNews";
import Spinner from "../../components/Spinner";
import "./index.css"

const MyBooks = () => {

    const [listNews, setListNews] = useState<[]>([])

    useEffect(() => {
        (async () => {
            const res = await getNewsRequest()
            setListNews(res.data)
        })()
    }, [])

    return (
        <div className={"news"}>
            <Spinner status={listNews.length > 0}>
                <div className="list-news-cards">
                    {
                        listNews.map((item: any) => (
                                <CardNews item={item} key={item.news_id}/>
                        ))
                    }
                </div>
            </Spinner>
        </div>
    )
}

export default MyBooks
