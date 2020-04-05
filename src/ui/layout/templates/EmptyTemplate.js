import React from 'react'
import { Layout } from 'antd'
import AppFooter from '../partials/AppFooter'
import AppHeader from '../partials/AppHeader'
export const EmptyTemplate = (props) => {
    return (<Layout className="full-height">
        <AppHeader title={props.title}/>
        <Layout.Content className="full-height">
            <br />
            {props.children}
        </Layout.Content>
      <AppFooter/>
    </Layout>)
}