import React from "react";
import { Spin } from 'antd';
import "./index.css"

type PropsType = {
    status: boolean
}

const Spinner: React.FC<PropsType> = ({children, status}) => {
    return (
       <div className="example">
           { status ? children : <Spin size="large" className="spinner"/>}
       </div>
    )
}

export default Spinner;
