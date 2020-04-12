import React from 'react'
import { Layout, Row, Col, Button } from 'antd'
import { connect } from 'react-redux'
import AppUserOptions from './AppUserOptions'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { ToggleMenu } from '../../../store/main/actions'


const AppHeader = (props) => {
    return (<Layout.Header className="header">
        <Row>
            {
                props.isLogged && <Col span={2}>
                    <Button type="primary" onClick={props.toggleMenu}>
                        {props.showMenu ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
                    </Button>
                </Col>
            }

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
    </Layout.Header>)
}
const mapStateToProps = (state) => {
    return {
        showMenu: state.main.showMenu,
        isLogged: state.auth.isLogged,
    }
}
const mapDispatch = (dispatch) => {
    return {
        toggleMenu: () => dispatch(ToggleMenu())
    }
}

export default connect(mapStateToProps, mapDispatch)(AppHeader)