import React, { useState } from 'react'
import { Card, Form, Button, Typography } from 'antd'
import { AppTextInput, AppCheckInput, AppDateInput } from './AppInputs'

const AppForm = (props) => {
    const [formData, setFormData] = useState({})

    const handleInputs = (prop, val) => {
        setFormData({
            ...formData,
            [prop]: val
        })
    }

    return <Card title={props.title}
        style={{ textAlign: "center", width: props.width || "max-content" }}
        actions={[
            <Button type="link" htmlType="button" onClick={props.onCancel}>Sign Up</Button>,
            <Button type="primary" htmlType="button"  onClick={() => props.onAccept(formData)} >Sign In</Button>

        ]}>
        <Form >
            {props.fields ? renderFields(props.fields, handleInputs) :
                "No fields Found!"}
        </Form>
    </Card>

}

const renderFields = (fields, onChange) => {
    return (<>{
        fields.map((field, i) => {
            field.onChange = onChange
            return <Form.Item
                key={i}
                name={field.name}  >
                {renderInput(field)}
            </Form.Item>
        })
    }</>)
}
const renderInput = (props) => {
    switch (props.type) {
        case "text":
        case "email":
        case "password":
        case "number":
            return <AppTextInput commonProps={props} />
        case "check":
            return <AppCheckInput commonProps={props} />
        case "date":
            return <AppDateInput commonProps={props} />
        default:
            return <Typography.Text>{props.type} type not implemented!</Typography.Text>
    }
}

export default AppForm