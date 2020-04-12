import React from 'react'
import { Layout } from 'antd'
import AppFooter from '../partials/AppFooter'
import AppHeader from '../partials/AppHeader'
import AppContent from '../partials/AppContent'
import AppLoading from '../partials/AppLoading'
import { connect } from 'react-redux'
import AppAlert from '../partials/AppAlert'

const EmptyTemplate = (props) => {
    return (<Layout >
        <AppHeader title={props.title} />
        <AppAlert />
        {
            props.isLoading ?
                <AppLoading />
                : <AppContent>
                    {props.children}
                </AppContent>
        }
        <AppFooter />
    </Layout>)
}
const mapStateToProps = (state) => {
    return {
        isLoading: state.main.isLoading
    }
}
export default connect(mapStateToProps)(EmptyTemplate)