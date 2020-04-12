import React from 'react'
import { connect } from 'react-redux'
import { Menu, Dropdown, Avatar } from 'antd';
import { UserOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons'
import { SignOut } from '../../../store/auth/actions';

const AppUserOptions = (props) => {
console.log(props)
    return (<Dropdown overlay={
        <Menu>
            <Menu.Item>
                <a target="_blank" >
                    <UserOutlined /> Profile
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" >
                    <SettingOutlined /> Settings
                </a>
            </Menu.Item>
            <Menu.Item>
                <label onClick={props.onSignOut}>
                    <LogoutOutlined /> Sign Out
                </label>
            </Menu.Item>
        </Menu>
    }>
        <Avatar shape="square" icon={<UserOutlined />} />

    </Dropdown>)
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSignOut: () => dispatch(SignOut())
    }
}
export default connect(null,mapDispatchToProps)(AppUserOptions)