import React from 'react'

export default function Alert(props) {
    const capitalize = (string) => {
        let sentence = string.substring(0, 1).toUpperCase() + string.substring(1, string.length);
        return sentence;
    }
    return (
        <div style={{height: '50px'}}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
            </div>}
        </div>
    )
}
