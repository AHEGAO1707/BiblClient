import React from "react";
import { Spin } from 'antd';

type PropsType = {
    status: boolean
}

const Spinner: React.FC<PropsType> = ({children, status}) => {
    return (
       <>
           { status ? children : <Spin size="large" />}
       </>
    )
}

export default Spinner;