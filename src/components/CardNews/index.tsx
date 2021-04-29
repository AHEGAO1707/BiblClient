import React from "react";
import {Card, Typography} from 'antd';
import './index.css'

const {Paragraph} = Typography;

type PropsType = {
    item: {
        author: string | null
        title: string | null
        content: any
        image_url: string
    },
    key: any
}

const CardNews: React.FC<PropsType> = ({
                                           item,
                                           key
                                       }) => {

    const [ellipsis] = React.useState(true);

    return (
        <div key={key}>
            <Card
                bordered={false}
                cover={<img alt="image_url" src={item.image_url}/>}
            >
                <Paragraph
                    style={{whiteSpace: "pre-wrap"}}
                    ellipsis={ellipsis ? {
                        rows: 5.2,
                        expandable: true,
                        symbol: 'Показать полностью...'
                    } : false}>
                    {item.content}
                </Paragraph>
            </Card>
        </div>
    )
}

export default CardNews
