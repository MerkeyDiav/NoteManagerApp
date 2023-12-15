import React from 'react'
import style from "../styles/textCard.module.css";
import {useState} from 'react'
import {Trash as TransIcon, Trash} from "react-bootstrap-icons";

export const TextCard = ({title, content, subtitle, onClickTrash, onClick}) => {
    const [cardIsHovered, setCardIsHovered] = useState();
    const [isTrashHovered, setIsTrashHovered] = useState()

    function onClickTrash(e){
        onClickTrash()
        e.stopPropagation();
        
    }
  return (
    <>
    <div 
        className={`card ${style.container}`} 
        style={{width: 18 + 'rem'}}
        onMouseEnter={()=> setCardIsHovered(true)}
        onMouseLeave={()=> setCardIsHovered(false)}
        onClick={onClick}
        >
        <div className="card-body">
            <div className={style.title_row}>
                <h5 className="card-title">{title}</h5>
                <Trash 
                    size={20}  
                    onMouseEnter={()=> setIsTrashHovered(true)}
                    onMouseLeave={()=> setIsTrashHovered(false)}
                    style = {{Color: isTrashHovered? "#FF7373": "#b8b8b8"}}
                    onClick={onClickTrash}
                    />
            </div>
            <h6 className="card-subtitle mb-2 text-muted"> {subtitle}</h6>
            <p className={`card-text  ${style.text_content}`} >{content}</p>
        </div>
    </div>
    </>
  )
}
