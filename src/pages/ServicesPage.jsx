import React from "react";
import Services from "../components/Services/Services";
import Navbar from "../components/Navbar/Navbar";
import Consultation from "../components/Consultation/Consultation";
import { useLocation } from "react-router";
import ShowTransition from "../components/ShowTransition/ShowTransition";



export default function ServicesPage() {



    const location = useLocation()
    const name_of_page = '/сервіси'

    const haschildren = true



    return (
        <>
            <Navbar></Navbar>


            <ShowTransition page_name={name_of_page}></ShowTransition>

            <Services pageIsOpen={location.pathname === '/services'}></Services>
            <Consultation></Consultation>



        </>
    )
}