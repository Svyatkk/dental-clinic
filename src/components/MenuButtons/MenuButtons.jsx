import './MenuButtons.css';
import React, { useState } from 'react';




export default function MenuButtons() {
    const [open, setOpen] = useState(false)
    const [openAbout, setOpenAbout] = useState(false)

    return (
        <>


            <div className='menu_buttons'>
                <div className='menu_item'>

                    <a
                        onClick={e => (e.preventDefault(), setOpen(true))}




                        onMouseEnter={() => setOpen(true)}
                        onMouseLeave={() => setOpen(false)} href="#">Послуги</a>

                    <div className={`services_menu ${open ? "show" : ""}`} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>

                        <div className="white_circle_menu">
                        </div>

                        <a href="#">Стоматогія</a>
                        <a href="#">Стоматогія</a>
                        <a href="#">Стоматогія</a>
                        <a href="#">Стоматогія</a>
                        <a href="#">Стоматогія</a>
                        <a href="#">Стоматогія</a>
                    </div>
                </div>



                <a href="#">Ціни</a>

                <div className='menu_item'>

                    <a onMouseEnter={() => setOpenAbout(true)}
                        onMouseLeave={() => setOpenAbout(false)} href="#">Про нас</a>
                    <div className={`services_menu ${openAbout ? "show" : ""}`} onMouseEnter={() => setOpenAbout(true)} onMouseLeave={() => setOpenAbout(false)}>
                        <div className="white_circle_menu">

                        </div>
                        <a href="#">Наша історія</a>
                        <a href="#">Наші роботи</a>

                    </div>
                </div>



                <a href="#">Відгуки</a>
                <a href="#">Контакти</a>




            </div >
        </>
    )
}
