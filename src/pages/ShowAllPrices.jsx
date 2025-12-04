import Navbar from "../components/Navbar/Navbar"
import Consultation from "../components/Consultation/Consultation"
import { useState, useRef, useEffect } from "react"
import ShowPriceBlock from "../components/ShowPriceBlock/ShowPriceBlock"
import { infoServicePages } from "../components/Data/DataServicePrices"
import ShowTransition from "../components/ShowTransition/ShowTransition"
import ShowDescriptionServiceBlock from "../components/ShowDescriptionServiceBlock/ShowDescriptionServiceBlock"

export default function ShowAllPrices() {

    const [open, setOpen] = useState([])
    const infoRefs = useRef([])

    useEffect(() => {

        infoRefs.current.forEach((el, idx) => {
            if (!el) return
            el.style.maxHeight = open.includes(idx) ? el.scrollHeight + 'px' : '0px'
        })
    }, [])

    function onclick(i) {
        let newOpen
        if (open.includes(i)) {
            newOpen = open.filter(item => item !== i)
            setOpen(newOpen)
        }
        else {
            newOpen = [...open, i]
            setOpen(newOpen)
        }

        setTimeout(() => {
            infoRefs.current.forEach((el, idx) => {
                if (!el) return
                if (newOpen.includes(idx)) {
                    el.style.maxHeight = el.scrollHeight + 'px'
                } else {
                    el.style.maxHeight = '0px'
                }
            })
        }, 0)
    }


    function generateForAccordeon(objects) {
        return objects.map((element, index) => (
            <div
                key={index}
                className={`accordeon ${open.includes(index) ? "show" : ""}`}
                onClick={() => onclick(index)}>
                <h3>{element.name}</h3>

                <div
                    className="show_info"
                    ref={(el) => (infoRefs.current[index] = el)}>
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
            <ShowTransition page={name_of_page} object={{}}></ShowTransition>
            <div className="container_for_accordeon">
                {generateForAccordeon(infoServicePages)}

            </div>
            <Consultation />
        </>
    )
}