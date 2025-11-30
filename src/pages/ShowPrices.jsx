import React from "react";
import Navbar from "../components/Navbar/Navbar";
import MenuButtons from "../components/MenuButtons/MenuButtons";
import { useParams } from "react-router";
import ShowTransition from "../components/ShowTransition/ShowTransition";
import Consultation from "../components/Consultation/Consultation";
import ServicesPage from "./ServicesPage";
import ShowPriceBlock from "../components/ShowPriceBlock/ShowPriceBlock";

export default function ShowPrices() {

    const { service } = useParams()




    const prices = [
        {


            name: 'Терапевтична стоматологія',
            'Гемостаз в області 1-го зуба': 200,
            'Зняття старої пломби (1 зуб)': 450,
            'Полірування зуба системою Soflex, Kendo (1 зуб)': 350,
            'Ізолювальна склоіономерна прокладка': 400

        },
        {
            name: 'Ортодонтія',
            'Консультація ортодонта': 500,
            'План лікування': 850,
        }

    ]


    let selected = ''
    selected = prices.find(item => item.name === service)
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