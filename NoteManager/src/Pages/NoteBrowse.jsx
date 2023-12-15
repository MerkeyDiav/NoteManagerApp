import React from 'react'
import style from "../styles/NoteBrowse.module.css"
import { TextCard } from '../components/TextCard';

function NoteBrowse() {
  return (
    <>
      <TextCard 
        title="aaa" 
        subtitle="1234" 
        content="merkey nathan ben"
        onClickTrash={() => alert("click trash")}
        onClick={() => alert("click note")}
        />
    </>
  )
}

export default NoteBrowse
