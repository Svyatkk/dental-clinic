import React from "react";
import Navbar from "../components/Navbar/Navbar";
import MenuButtons from "../components/MenuButtons/MenuButtons";





export default function ShowPrices({ selectedService }) {



    const selected = ''
    selected = pages.filter(item => item.name === selectedService)

    const pages = [
        {
            path: '/services/'

        }
    ]

    return (

        <>
            <Navbar></Navbar>
            <div>
                {
                    selected.path

                }
            </div>
        </>





    )
}