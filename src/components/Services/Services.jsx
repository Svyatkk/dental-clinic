import './Services.css';
import React from 'react';
import { useState } from 'react';


export default function Services({ pageIsOpen }) {



    return (
        <>


            <section className={`blocks_services ${pageIsOpen ? "pageIsOpen" : ""}`}>
                <h3>Наші послуги</h3>

                <div className="blocks_service">
                    <div>

                    </div>
                    <h3>Терапевтична стоматологія</h3>

                </div>

                <div className="blocks_service">
                    <div>


                    </div>
                    <h3>Ортодонтія</h3>
                </div>

                <div className="blocks_service">
                    <div>

                    </div>
                    <h3>Імплатанція зубів</h3>

                </div>

                <div className="blocks_service">
                    <div>

                    </div>
                    <h3>Ортопедія</h3>

                </div>

                <div className="blocks_service">
                    <div>

                    </div>
                    <h3>Хірургія</h3>

                </div>

                <div className="blocks_service">
                    <div>

                    </div>
                    <h3>Дитяча стоматологія</h3>

                </div>

                <div className="blocks_service">
                    <div>

                    </div>
                    <h3>Лікування каналів зуба</h3>

                </div>

                <div className="blocks_service">
                    <div>

                    </div>
                    <h3>Гігієна і парадонтологія</h3>


                </div>

            </section>
        </>
    )
}
