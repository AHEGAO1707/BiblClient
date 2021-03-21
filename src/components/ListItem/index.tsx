import React from "react";
import './index.css'


type PropsType = {
    data: any[]
    renderItem: (item: string, key: number) => any
    params: any
}


const ListItem: React.FC<PropsType> = ({data, renderItem, params}) => {
    let nameClass = "listAddBook";
    if (params !== null) {
        nameClass = params
    }


    return (
        <div className={nameClass}>
            {
                data.length > 0
                    ? data.map((item: string, key: number) => renderItem(item, key))
                    :
                    <div className="addTitle">
                    </div>
            }
        </div>
    )
}

export default ListItem
