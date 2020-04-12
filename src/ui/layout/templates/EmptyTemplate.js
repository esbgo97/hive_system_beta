import React from 'react'
import { Layout } from 'antd'
import AppFooter from '../partials/AppFooter'
import AppHeader from '../partials/AppHeader'
import AppContent from '../partials/AppContent'
import AppLoading from '../partials/AppLoading'
import { connect } from 'react-redux'
import AppAlert from '../partials/AppAlert'

const EmptyTemplate = (props) => {
    if (props.isLoading)
        return <AppLoading />
    return (<Layout >

        <AppHeader title={props.title} />
        <AppAlert />
        <AppContent>
            {props.children}
        </AppContent>
        <AppFooter />
    </Layout>)
}
const mapStateToProps = (state) => {
    return {
        isLoading: state.main.isLoading,
        isLogged: state.auth.isLogged
    }
}
export default connect(mapStateToProps)(EmptyTemplate)