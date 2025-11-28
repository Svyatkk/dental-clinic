import React from "react";
import Services from "../components/Services/Services";
import Navbar from "../components/Navbar/Navbar";
import Consultation from "../components/Consultation/Consultation";
import { useLocation } from "react-router";
import ShowTransition from "../components/ShowTransition/ShowTransition";



export default function ServicesPage() {




    const location = useLocation()
    const name_of_page = '/Послуги'


    const page = {
        name_of_page: 'Послуги',
        haschildren: true,
        pageLocation: location,
        parent: <a>/</a>
    }


    return (
        <>
            <Navbar></Navbar>


            <ShowTransition page={page}></ShowTransition>

            <Services pageIsOpen={location.pathname === '/services'}></Services>
            <Consultation></Consultation>



        </>
    )
}