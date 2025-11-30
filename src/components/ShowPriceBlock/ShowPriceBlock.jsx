import react from "react"
import './ShowPriceBlock.css';


export default function ShowPriceBlock({ object }) {




    const entries = Object.entries(object).filter(([key]) => key !== "name");

    return (

        <section className="show_prices">

            <div className="grid_price">

                {entries.map(([serviceName, price]) => (

                    < div className="block" >
                        <div className="showname">
                            {serviceName}
                        </div>

                        <div className="showprice">
                            {price}

                        </div>
                    </div >
                ))}

            </div >


        </section >

    )
}