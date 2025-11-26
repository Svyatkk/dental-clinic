import { useState } from 'react';
import { useEffect } from 'react';
import Button from '../Button/Button';
import MenuButtons from '../MenuButtons/MenuButtons';
import SideBar from '../SideBar/Sidebar';
import './Navbar.css';


export default function Navbar({ children }) {

    const [clicked, Setcliccliked] = useState(false)




    const [scrolled, setScrolled] = useState(false)
    const [menuToggleclicked, setMenutoggle] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 1
            setScrolled(isScrolled)
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })

    return (
        <>
            <nav className={`${scrolled ? "scrolled" : ""} ${menuToggleclicked ? "opened" : ""}`}>

                <div className="navbar">

                    <a href='/dental-clinic' className="logo">
                        <img src="" alt="" />

                    </a>

                    <MenuButtons></MenuButtons>

                    <Button></Button>
                    <div
                        onClick={() => setMenutoggle(!menuToggleclicked)}
                        className={`menu-toggle ${menuToggleclicked ? "active" : ""}`}>
                        <span></span>
                        <span></span>
                        <span></span>

                    </div>

                </div>
            </nav>

            <SideBar isOpenSd={menuToggleclicked} />
        </>
    )
}