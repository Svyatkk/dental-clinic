import react from "react"
import './ShowPriceBlock.css';
import { useState } from "react";




export default function ShowPriceBlock({ object }) {

    const entries = Object.entries(object).filter(([key]) => key !== "name");

    return (

        < section className="show_prices" >

            <div className="grid_price">


                {entries.map(([serviceName, price], index) => (
                    < div className="block" >
                        <div className={`showname ${index % 2 === 0 ? "active_block" : ""}`}>
                            {serviceName}
                        </div>

                        <div className={`showprice ${index % 2 === 0 ? "active_block" : ""}`}>
                            {price} ₴

                        </div>
                    </div >
                ))}

            </div >
        </section >

    )
}