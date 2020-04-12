import React from 'react'
import { Layout, Row, Col } from 'antd'
import { connect } from 'react-redux'
import AppUserOptions from './AppUserOptions'

const { Header } = Layout

const AppHeader = (props) => {
    return (<Header className="header">
        <Row>
            <Col span={10}>
                {props.title}
            </Col>
            <Col span={2} offset={10}>
                {
                    props.isLogged ?
                        <AppUserOptions />
                        : null
                }
            </Col>
        </Row>
    </Header>)
}
const mapStateToProps = (state) => {
    return {
        isLogged: state.auth.isLogged
    }
}
export default connect(mapStateToProps)(AppHeader)