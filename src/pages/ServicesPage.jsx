import React from "react";
import Services from "../components/Services/Services";
import Navbar from "../components/Navbar/Navbar";
import Consultation from "../components/Consultation/Consultation";
import { useLocation } from "react-router";

export default function ServicesPage() {


    const location = useLocation()

    return (
        <>
            <>




                <Navbar></Navbar>
                <Services pageIsOpen={location.pathname === '/services'}></Services>
                <Consultation></Consultation>

            </>


        </>
    )
}