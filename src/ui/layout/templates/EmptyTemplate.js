import React from 'react'
import { Layout } from 'antd'
import AppFooter from '../partials/AppFooter'
import AppHeader from '../partials/AppHeader'
import AppContent from '../partials/AppContent'
export const EmptyTemplate = (props) => {
    return (<Layout >
        <AppHeader title={props.title}/>
        <AppContent>
            {props.children}
        </AppContent>
      <AppFooter/>
    </Layout>)
}