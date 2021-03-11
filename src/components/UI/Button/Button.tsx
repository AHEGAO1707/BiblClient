import React, {ReactNode} from 'react'
import './Button.css'

type PropsTypes = {
    type: 'button' | 'submit' | 'reset'
    styleType: string
    children: ReactNode
    disabled?: boolean
    onClick?: () => void
}

const Button = (props: PropsTypes) => {
    const classes = ['Button', `${props.styleType}`]

    return (
        <button
            className={classes.join(' ')}
            onClick={props.onClick}
            type={props.type}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}

export default Button
