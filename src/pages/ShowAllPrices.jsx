import Navbar from "../components/Navbar/Navbar"
import Consultation from "../components/Consultation/Consultation"
import { useState } from "react"
import ShowPriceBlock from "../components/ShowPriceBlock/ShowPriceBlock"
import { infoServicePages } from "../components/Data/DataServicePrices"
import ShowTransition from "../components/ShowTransition/ShowTransition"






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


                <span>
                    &#62;

                </span>

            </div>
        ));
    }
    const name_of_page = `Ціни`



    return (
        <>


            <Navbar />
            <ShowTransition page={name_of_page}></ShowTransition>


            <div className="container_for_accordeon">
                {generateForAccordeon(infoServicePages)}

            </div>
            <Consultation />
        </>
    )
}