import React from 'react'
import { withRouter } from 'react-router'
import { EmptyTemplate } from '../../layout/templates/EmptyTemplate'
import AppForm from '../../layout/partials/AppForm';
import { Icon } from 'antd';

const LoginPage = () => {
    const formFields = [
        { name: "email", 
        placeholder: "Email", type: "email",icon:"mail" },
        { name: "pass", placeholder: "Password", type: "password",icon:"lock" }
    ]
    return (<EmptyTemplate title="Login">
        <AppForm fields={formFields} />
    </EmptyTemplate>)
}

export default withRouter(LoginPage)