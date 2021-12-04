import React from 'react'

function Button(props) {
    return (
        <div className="button">
            <a className="button" href={props.target}>{props.button__text}</a>
        </div>
    )
}

export default Button
