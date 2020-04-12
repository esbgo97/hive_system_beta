import React from 'react'
import { Layout } from 'antd'
import AppMenu from '../partials/AppMenu'

const AppContent = (props) => {

    return <Layout >
        <AppMenu />
        <Layout.Content className="content">
            {props.children}
        </Layout.Content>
    </Layout>
}

export default AppContent