import React from 'react'
import './Button.css'
function Button({
    children,
    onClick
}) {
    const STYLES =['btn--primary']
  return (
    <>
        <button className={STYLES} onClick={onClick}>{children}</button>
    </>
  )
}

export default Button