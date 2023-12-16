import React from 'react'
import style from "../styles/noteForm.module.css";
import { PencilFill, TrashFill} from 'react-bootstrap-icons';
import {Button} from "react-bootstrap";
import { useState } from 'react';

export const NoteForm = ({title, onSubmit, onClickEdit, onClickTrash}) => {
    const [formValues, setFormValues] = useState({title:"", content:""});

    function updateFormValue(e){
      setFormValues({...formValues, [e.target.name]: e.target.value})
    }
    const actionIcons =( 
    <>
      <div className='col-1'>
        {onClickEdit && <PencilFill onClick={onClickEdit} className={style.icon} />}
      </div>
      <div className='col-1'>
        {onClickTrash && <TrashFill  onClick={onClickTrash} className={style.icon} />}
      </div>

    </>
    )

    const titleInput = ( 
    <>
      <label className='form-label'>Title</label>
      <input 
        type='text' 
        onChange={updateFormValue}
        name="title" 
        className='form-control'
        />
    </>
    )
    
    const contentInput =(
    <>
      <label className='form-label'>Content</label>
      <textarea 
        type='text' 
        name="content" 
        className='form-control' 
        onChange={updateFormValue}
        rows="5"/>
    </>
    )
    
    const submitButton = ( 
    <>
      <div className={style.submit_btn}>
        {onSubmit &&  <Button onClick={()=> onSubmit(formValues)} variant="primary">Submit</Button>}
      </div>

    </>
    )
    
    
  return (
    <form className={style.container}>
       <div className='row justify-content-space-between'>
          <div className='col-10'><h2 className='mb-3'>{title} </h2></div>
           {actionIcons} 
       </div>
        <div className={`mb-3 ${style.title_input_container}`}>
        {titleInput}
        </div>
        <div className='mb-3'>{contentInput}</div>
        {submitButton}
    </form>
  )
}
