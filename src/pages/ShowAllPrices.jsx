import Navbar from "../components/Navbar/Navbar"
import Consultation from "../components/Consultation/Consultation"
import { useState } from "react"
import ShowPriceBlock from "../components/ShowPriceBlock/ShowPriceBlock"
import { infoServicePages } from "../components/Data/DataServicePrices"


export default function ShowAllPrices() {

    const [open, setOpen] = useState(null)

    function onclick(i) {

        setOpen(open === i ? null : i)
    }

    function generateForAccordeon(objects) {
        return objects.map((element, index) => (
            <div


                className={`accordeon ${open === index ? "show" : ""}`}
                onClick={() => onclick(index)}

                key={index}>
                <h3>{element.name}</h3>

                <div


                    className="show_info">
                    <ShowPriceBlock object={element} />
                </div>

            </div>
        ));
    }


    return (
        <>


            <Navbar />
            <div className="container_for_accordeon">
                {generateForAccordeon(infoServicePages)}

            </div>
            <Consultation />
        </>
    )
}