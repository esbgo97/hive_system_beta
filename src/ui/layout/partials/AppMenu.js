import React, { useState } from 'react'
import { Menu, Layout } from 'antd';
import { DashboardFilled } from '@ant-design/icons';
import { connect } from 'react-redux';

const AppMenu = (props) => {
    
    const [showMenu, setShowMenu] = useState(true)
    
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    };

    return (
        <Layout.Sider  hidden={!props.isLogged} collapsed={props.showMenu}>
            <Menu
                onClick={toggleMenu}
                defaultSelectedKeys={[props.currentRoute]}
                mode="inline"
            >

                {
                    props.routes.map((route, i) =>
                        <Menu.Item key={route.path}>
                            <DashboardFilled />
                            <span>
                                {route.name}
                            </span>
                        </Menu.Item>)
                }

            </Menu>
        </Layout.Sider>
    );

}

const mapStateToProps = (state) => {
    return {
        isLogged: state.auth.isLogged,
        routes: state.auth.routes,
        showMenu:state.main.showMenu,
        currentRoute:state.router.location.pathname
    }
}
export default connect(mapStateToProps)(AppMenu)