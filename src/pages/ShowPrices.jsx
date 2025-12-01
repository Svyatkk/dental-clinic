import React from "react";
import Navbar from "../components/Navbar/Navbar";
import MenuButtons from "../components/MenuButtons/MenuButtons";
import { useParams } from "react-router";
import ShowTransition from "../components/ShowTransition/ShowTransition";
import Consultation from "../components/Consultation/Consultation";
import ServicesPage from "./ServicesPage";
import ShowPriceBlock from "../components/ShowPriceBlock/ShowPriceBlock";
import { useState } from "react";
import { infoServicePages } from "../components/Data/DataServicePrices";


export default function ShowPrices() {

    const { service } = useParams()


    const [open, setOpen] = useState(false)


    let selected = ''
    selected = infoServicePages.find(item => item.name === service)
    const name_of_page = `Послуги / ${service}`


    return (

        <>
            <Navbar></Navbar>
            <ShowTransition page={name_of_page}></ShowTransition>
            <ShowPriceBlock object={selected}></ShowPriceBlock>
            <Consultation></Consultation>

        </>

    )
}