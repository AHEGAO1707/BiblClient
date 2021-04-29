import React from "react";
import {Card, Typography,} from 'antd';
import './index.css'
const { Title, Paragraph, Text, Link } = Typography;

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

    const [ellipsis, setEllipsis] = React.useState(true);
    return (
        <div key={key}>
            <Card
                bordered={false}
                cover={<img alt="image_url" src={item.image_url} />}
            >
                    <Paragraph
                        ellipsis={ellipsis ? {rows: 3.1, suffix: '\n', expandable: true, symbol: 'Показать полностью' } : false}>
                    {item.content}
                </Paragraph>
                {/*<Meta*/}
                {/*    description={item.content}*/}
                {/*      style={{textAlign: 'left'}}/>*/}
            </Card>
        </div>
    )
}

export default CardNews
