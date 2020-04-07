import React from 'react'
import { withRouter } from 'react-router'
import { EmptyTemplate } from '../../layout/templates/EmptyTemplate'
import AppForm from '../../layout/partials/AppForm';

const LoginPage = (props) => {
    const formFields = [
        {
            name: "email",
            placeholder: "Email",
            type: "email",
            icon: "mail"
        },
        {
            name: "pass",
            placeholder: "Password",
            type: "password",
            icon: "lock"
        },
        {
            name: "rememberMe",
            placeholder: "Remember Me",
            type: "check",
        }
    ]
    const handleSubmit = (data) => {
        console.log(data)
    }
    const handleCancel = () => {
        props.history.push("/SignUp")
    }
    return (<EmptyTemplate title="Hive System Beta">
        <br />
        <AppForm width="400px"
            title="Login Here!"
            fields={formFields}
            onAccept={handleSubmit}
            onCancel={handleCancel} />
    </EmptyTemplate>)
}

export default withRouter(LoginPage)