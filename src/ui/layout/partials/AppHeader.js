import React from 'react'
import { Layout } from 'antd'
const { Header } = Layout

const AppHeader = (props) => {
    return (<Header className="header">
        {props.title}
    </Header>)
}

export default AppHeader