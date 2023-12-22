import { useParams } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {useState} from "react";
import { NoteForm } from "./NoteForm";
import { NoteApi } from '../api/note-api';
import { updateNote } from '../store/note/note-slice';

/**
 * @function Note
 * @return NoteForm
 * 
 */
export default function Note() {
    const [isEditable, setIsEditable] = useState(false);
    const {noteId} = useParams();
    const dispatch = useDispatch();

    const note = useSelector(store => store.NOTE.noteList.find(note => note.id == noteId))
    async function submit(formValues){
        const updatedNote = await NoteApi.update({...formValues, id:noteId});
        dispatch(updatedNote(updateNote))
        setIsEditable(false)
    }
    return <>
    {note && (
        <NoteForm 
            isEditable={isEditable} 
            note={note}
            title={isEditable? "Edit note" : note.title} 
            onClickEdit={()=>setIsEditable(!isEditable)}
            onClickTrash={()=>{}}
            onSubmit={isEditable && submit}
            />)}
    </>
}