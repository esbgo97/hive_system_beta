import React from 'react'
import { Input, Icon, Checkbox, DatePicker } from 'antd'

//This works for text, email, pass & numeric
export const AppTextInput = (props) => {
    let { name, type, placeholder, icon, onChange } = props.commonProps
    return <Input placeholder={placeholder}
        onChange={(val) => onChange(name, val.target.value)}
        prefix={icon && <Icon type={icon} />}
        type={type} />
}

export const AppCheckInput = (props) => {
    let { name, placeholder, onChange } = props.commonProps
    return <Checkbox name={name}
        onChange={(val) => onChange(name, val.target.checked)} >
        {placeholder}
    </Checkbox>
}

export const AppDateInput = (props) => {
    let { name, placeholder, onChange } = props.commonProps
    return <DatePicker name={name}
        style={{ width: "100%" }}
        showToday
        placeholder={placeholder}
        onChange={(val) => onChange(name, val.toDate())} />
}