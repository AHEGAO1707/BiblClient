import React, {useEffect, useState} from "react";
import './index.css'

type PropsType = {
    data: any[]
    renderItem: (item: any, key: number) => any
    params: any
}

const ListItem: React.FC<PropsType> = ({data, renderItem, params}) => {
    const [nameClass, setNameClass] = useState("listAddBook");

    useEffect(() => {
        if (params !== null) {
            setNameClass(params)
        }
    }, [])

    return (
        <div className={nameClass} >
            {
                data.length > 0
                    ? data.map((item: any, key: number) => renderItem(item, key))
                    : <div className="addTitle" />
            }
        </div>
    )
}

export default ListItem
