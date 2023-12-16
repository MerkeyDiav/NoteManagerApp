import React from 'react';
import style from '../styles/fieldError.module.css';

export const FieldError = ({msg}) => {
  return (
    <span className={style.container}>
      {msg}
    </span>
  )
}
