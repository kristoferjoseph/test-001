import React from 'react'
import Link from 'next/link'

const Button = (props) => {
    const buttonClass = "animate-btn w-full"
    return (props.link ?
        <Link href={props.link}>
            <button
                className={buttonClass}
                type="button" >
                {props.text}
            </button>
        </Link> :
        <button
            onClick={() => props.handleButtonClick()}
            className={buttonClass}
            type="button" >
            {props.text}
        </button>)
}

export default Button