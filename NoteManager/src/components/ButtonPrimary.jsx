import React from 'react'
import style from "../styles/buttonPrimary.module.css";

export default function ButtonPrimary({children, onClick={onclick}}) {
  return (
    <button 
        onClick={onClick} 
        type='button' 
        className={`btn btn-primary ${style.button}`} 
        > {children} 
    </button>
  )
}
