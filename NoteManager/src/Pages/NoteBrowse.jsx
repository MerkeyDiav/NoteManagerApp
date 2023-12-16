import React from 'react'
import style from "../styles/NoteBrowse.module.css"
import { TextCard } from '../components/TextCard';
import { NoteList } from '../container/NoteList';

function NoteBrowse() {
  return (
    <>
      <NoteList />
    </>
  )
}

export default NoteBrowse
