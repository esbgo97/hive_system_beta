import React from 'react'
import { Card, Form, Input, Checkbox, Button, Icon } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const AppForm = (props) => {
    const handleSubmit = (val) => {
        val.preventDefault()
        console.log(val)
    }

    return <Card title="Ingreso" style={{ textAlign: "center" }}>

        <Form name="Login"
            onSubmit={handleSubmit}
            className="login-form">
            {props.fields ? renderFields(props.fields) :
                "No fields Found!"}
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">Sign In </Button>
                <br />
                <Button type="link" htmlType="submit" className="login-form-button">Sign Up </Button>
            </Form.Item>
        </Form>
    </Card>

}

const renderFields = (fields) => {
    return (<>{
        fields.map((field, i) => {
            return <Form.Item
                key={i}
                name={field.name}  >
                <Input placeholder={field.placeholder}
                    prefix={field.icon && <Icon type={field.icon} />}
                    type={field.type} />
            </Form.Item>
        })
    }</>)
}

export default AppForm