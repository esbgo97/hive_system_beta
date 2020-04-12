import React from 'react'
import { Spin } from 'antd'
import { connect } from 'react-redux'

const AppLoading = (props) => {
    return (<Spin spinning={props.isLoading}
        tip={props.message} />)
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.main.isLoading,
        message: state.main.message
    }
}

export default connect(mapStateToProps)(AppLoading)