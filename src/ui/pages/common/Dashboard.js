import React from 'react'
import EmptyTemplate from '../../layout/templates/EmptyTemplate'
import { connect } from 'react-redux'
import { Typography } from 'antd'

const Dashboard = (props) => {

    return <EmptyTemplate title="Dashboard">
        <Typography.Title>Welcome {props.user.email}</Typography.Title>
        <br />
    </EmptyTemplate>
}
const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
    }
}
export default connect(mapStateToProps)(Dashboard)