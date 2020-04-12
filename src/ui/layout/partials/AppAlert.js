import React from 'react'
import { connect } from 'react-redux'
import { Alert } from 'antd'
import { CloseCircleOutlined } from '@ant-design/icons'

import { HideAlert } from '../../../store/alert/actions'

const AppAlert = (props) => {
    if (!props.show)
        return null

    return (<Alert
        showIcon
        type={props.type}
        message={props.message}
        onClose={props.hideAlert}
        closeText={<CloseCircleOutlined />}
    />)
}

const mapStateToProps = (state) => {
    const alert = state.alert

    return {
        show: alert.show,
        type: alert.type,
        message: alert.message
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        hideAlert: () => dispatch(HideAlert())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppAlert)