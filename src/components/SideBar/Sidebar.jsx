import './Sidebar.css';
import MenuButtons from '../MenuButtons/MenuButtons';
import Button from '../Button/Button';
import Navbar from '../Navbar/Navbar';
import { use, useState } from 'react';
export default function SideBar({ isOpenSd }) {

    const [isOpen, setOpen] = useState(false)

    const [isOpenAbout, setOpenAbout] = useState(false)

    return (
        <>
            <section className={`sidebar_menu ${isOpenSd ? "open" : ""}   `}>

                <div className='menu_buttons_sd'>
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            setOpen(prev => !prev);
                        }}

                    >
                        Послуги
                    </a>
                    <div className={`block_toggle_container ${isOpen ? "open" : ""}`}>
                        <a href="">Service</a>
                        <a href="">Service</a>
                        <a href="">Service</a>
                        <a href="">Service</a>
                        <a href="">Service</a>



                    </div>

                    <a href="#">Ціни</a>
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            setOpenAbout(prev => !prev);
                        }}
                    >
                        Про нас
                    </a>
                    <div className={`block_toggle_container ${isOpenAbout ? "open" : ""}`}>
                        <a href="#">Наша історія</a>
                        <a href="#">Наші роботи</a>
                    </div>

                    <a href="#">Відгуки</a>
                    <a href="#">Контакти</a>

                </div>
                <Button></Button>



            </section >

        </>
    )

}
