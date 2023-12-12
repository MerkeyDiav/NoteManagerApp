import React from 'react'
import style from "../styles/header.module.css"
import logo from "../assets/images/logo.png"
import Logo from "../components/Logo"
import ButtonPrimary from './ButtonPrimary'
import {useNavigate} from "react-router-dom" 

export default function Header() {
    const navigate = useNavigate()
  return (
    <div className={`row ${style.container}`}>
      <div className="col-xs-12 col-sm-4"> 
        <Logo 
            title="Notomatic" 
            subtitle="Manage your own notes" 
            image={logo} 
            onClick={() => navigate("/")}
            />
      </div>
      <div className='col-xs-12 col-sm-8 text-end'>
        <ButtonPrimary onClick={() => navigate("/note/new")}>
            Add note+
        </ButtonPrimary>
      </div>
    </div>
  )
}
