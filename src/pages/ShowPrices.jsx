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




    const infoServicePages = [
        {
            name: 'Терапевтична стоматологія',
            'Гемостаз в області 1-го зуба': 200,
            'Зняття старої пломби (1 зуб)': 450,
            'Полірування зуба системою Soflex, Kendo (1 зуб)': 350,
            'Ізолювальна склоіономерна прокладка': 400,
            'Ізолювальна склоіономерна прокладка': 400,
            'Лікувальна прокладка з кальцієм Са': 450,
            'Тимчасова пломба': 250,
            'Пломба з склоіномерного цементу мала': 900,
            'Пломба з склоіномерного цементу середня': 1500,
            'Пломба з склоіномерного цементу велика': 2300,
            'Фотополімерна пломба мала': 1100,
            'Фотополімерна пломба середня': 1600,
            'Фотополімерна пломба велика': 2300,
            'Художня/функціональна реставрація зуба мала': 1650,
            'Художня/функціональна реставрація зуба середня': 2100,
            'Художня/функціональна реставрація зуба велика': 2800,
            'Відновлення кукси зуба для подальшого протезування (позиція не включає скловолоконний або кварцовий штифт)': 1500,
            'Відновлення кукси зуба для подальшого протезування зі штифтом (позиція включає скловолоконний або кварцевий штифт)': 2300,
            'Високоестетичний фотокомпозитний віннір (передня група зубів)': 6000,
            'Зняття старої пломби (видалення каріозних тканин) 1 зуб': 450
        },
        {
            name: 'Ортодонтія',
            'Консультація ортодонта': 500,
            'План лікування': 850,
        },
        {
            name: 'Хірургія',
            'Використання пєзотома 1-го ступеня': 900,
            'Використання пєзотома 2-го ступеня': 1400,
            'Використання пєзотома 3-го ступеня': 1900

        }

    ]


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