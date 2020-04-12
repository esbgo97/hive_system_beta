import React from 'react'
import { connect } from 'react-redux'
import { Menu, Dropdown, Avatar } from 'antd';
import { UserOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons'
import { SignOut } from '../../../store/auth/actions';

const AppUserOptions = (props) => {
    return (<Dropdown overlay={
        <Menu>
            <Menu.Item>
                <UserOutlined />
                <span>Profile</span>
            </Menu.Item>
            <Menu.Item>
                <SettingOutlined />
                <span>Settings</span>
            </Menu.Item>
            <Menu.Item>
                <label onClick={props.onSignOut}>
                    <LogoutOutlined /> Sign Out
                </label>
            </Menu.Item>
        </Menu>
    }>
        <Avatar shape="circle" icon={<UserOutlined />} />

    </Dropdown>)
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSignOut: () => dispatch(SignOut())
    }
}
export default connect(null, mapDispatchToProps)(AppUserOptions)