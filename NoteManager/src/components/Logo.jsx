import moduleStyle from "./style.module.css"

export default function Logo({image, title, subtitle, onClick={onClick}}) {
  return (
    <>
       <div className={moduleStyle.container}>
         <img className={moduleStyle.img} src={image} alt="logo" onClick={onClick} />
         <div className={moduleStyle.title}>{title}</div>
        </div> 
        <div className={moduleStyle.subtitle}>{subtitle}</div>
    </>
  )
}
