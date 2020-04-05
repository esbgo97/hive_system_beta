import React from 'react'
import { Layout, Typography, } from 'antd'
const {Title} = Typography
export const EmptyTemplate = (props) => {
    return (<Layout>
        <Layout.Header >
    <Typography.Title>{props.title || "Hive System"}</Typography.Title>
           {/* <Title>{props.title}</Title> */}
        </Layout.Header>
        <Layout.Content>{props.children}</Layout.Content>
        <Layout.Footer></Layout.Footer>
    </Layout>)
}