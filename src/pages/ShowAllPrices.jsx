import Navbar from "../components/Navbar/Navbar"
import Consultation from "../components/Consultation/Consultation"
import { useState } from "react"
import ShowPriceBlock from "../components/ShowPriceBlock/ShowPriceBlock"
import { infoServicePages } from "../components/Data/DataServicePrices"


export default function ShowAllPrices() {

    const [open, setOpen] = useState(false)


    function onClick() {
        setOpen(!open)
    }



    function generateForAccordeon(objects) {
        return objects.map((element, index) => (
            <div className="accordeon" key={index}>
                <ShowPriceBlock object={element} />
            </div>
        ));
    }


    return (
        <>



            <Navbar />
            {generateForAccordeon(infoServicePages)}
            <Consultation />
        </>
    )
}