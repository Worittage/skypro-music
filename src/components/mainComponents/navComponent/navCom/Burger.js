import React, { useState } from 'react'
import Menu from './Menu'

const Burger = () => {

//Данные строки помогают показать контент Menu при нажатий на кнопки
  const [visible, setVisible] = useState(true)
  const toggleVisibility = () => setVisible(!visible)
///////////////////////////////////////////////////////
  
  
  
    return (
      <div>
         <div onClick={toggleVisibility} className={`nav__burger burger ${visible ? '' : 'burger-open'}`}>
         
            <span className="burger__line" />
            <span className="burger__line" />
            <span className="burger__line" />
        </div>
        {visible ? "" : <Menu/>}
        {/*//////////////////////*/}
      </div>
    )
  }


export default Burger