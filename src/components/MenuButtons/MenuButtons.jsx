import './MenuButtons.css';
import React, { useState } from 'react';

export default function MenuButtons() {
    const [open, setOpen] = useState(false);
    const [openAbout, setOpenAbout] = useState(false);

    return (
        <>
            <div className='menu_buttons'>
                <div className='menu_item'>

                    <a
                        onMouseEnter={() => setOpen(true)}
                        onMouseLeave={() => setOpen(false)}
                        href="#/services"
                    >
                        Послуги
                    </a>

                    <div
                        className={`services_menu ${open ? "show" : ""}`}
                        onMouseEnter={() => setOpen(true)}
                        onMouseLeave={() => setOpen(false)}
                    >
                        <div className="white_circle_menu"></div>

                        <a
                            href="#/services/service/Терапевтична стоматологія">
                            Терапевтична стоматологія
                        </a>
                        <a href="#/services/service/Ортодонтія">Ортодонтія</a>
                        <a href="#/services/service/Хірургія">Хірургія</a>
                        <a href="#/services/service/Імплатанція зубів">Імплатанція зубів</a>
                        <a href="#/services/service/Лікування каналів зуба">Лікування каналів зуба</a>
                        <a href="#/services/service/Естетична стоматологія">Естетична стоматологія</a>


                    </div>
                </div>

                <a href="#">Ціни</a>

                <div className='menu_item'>
                    <a
                        onMouseEnter={() => setOpenAbout(true)}
                        onMouseLeave={() => setOpenAbout(false)}
                        href="#"
                    >
                        Про нас
                    </a>

                    <div
                        className={`services_menu ${openAbout ? "show" : ""}`}
                        onMouseEnter={() => setOpenAbout(true)}
                        onMouseLeave={() => setOpenAbout(false)}
                    >
                        <div className="white_circle_menu"></div>
                        <a href="#">Наша історія</a>
                        <a href="#">Наші роботи</a>
                    </div>
                </div>


                <a href="#">Відгуки</a>
                <a href="#">Контакти</a>
            </div>
        </>
    );
}
