import React from 'react'
import style from "../styles/noteForm.module.css";
import { PencilFill, TrashFill} from 'react-bootstrap-icons';
import {Button} from "react-bootstrap";
import { useState } from 'react';
import { ValidatorService } from '../services/form-validators';
import { FieldError } from '../components/FieldError';

const VALIDATORS = {
  title: (value)=>{
    return ValidatorService.min(value,3) || ValidatorService.max(value,20)
  },
  content: (value)=>{
    return ValidatorService.min(value,3) 
  }
}
export const NoteForm = ({
    note, 
    isEditable=true, 
    title, 
    onSubmit, 
    onClickEdit, 
    onClickTrash}) => {

    const [formValues, setFormValues] = useState({title:"", content:""});
    const [formError, setFormError] = useState({title:"", content: ""})

    function hasError(){
      return Object.values(formError).some((error) => error != undefined)
    }
    
    function updateFormValue(e){
      setFormValues({...formValues, [e.target.name]: e.target.value})
      validate(e.target.name, e.target.value)
    }
    console.log(formError)
    function validate(fieldName, fieldValue){
      setFormError({...formError, [fieldName]: VALIDATORS[fieldName](fieldValue)})
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
    <div className='mb-3'>
      <label className='form-label'>Title</label>
      <input 
        type='text' 
        onChange={updateFormValue}
        name="title" 
        className='form-control'
        />
        <FieldError msg={formError.title}/>
    </div>
    )
    
    const contentInput =(
    <div className='mb-3'>
      <label className='form-label'>Content</label>
      <textarea 
        type='text' 
        name="content" 
        className='form-control' 
        onChange={updateFormValue}
        rows="5"/>
        <FieldError msg={formError.content}/>
    </div>
    )
    
    const submitButton = ( 
    <>
      <div className={style.submit_btn}>
        {onSubmit &&  <Button disabled={hasError()} onClick={()=> onSubmit(formValues)} variant="primary">Submit</Button>}
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
        { isEditable && titleInput}
        </div>
        <div className='mb-3'>{isEditable ? contentInput : <pre>{note?.content}</pre>}</div>
        {submitButton}
    </form>
  )
}
