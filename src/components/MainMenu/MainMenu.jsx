import React from "react";
import { useState } from "react";
import './MainMenu.css'


export default function MainMenu() {


    return (
        <>


            <section>
                <div className="main_block">

                    <div className="block_wrapper_1">
                        <div>
                            <div className="text">
                                <h1>Комплексні стоматологічні послуги</h1>
                                <p>Допоможемо засяяти усмішкою мрії</p>
                            </div>



                            <div className="adress">
                                <p>смт. Ружин, вул. гетьманська 112а</p>
                                <a>123091283</a>
                                <a target="_blank"
                                    href="https://www.google.com/maps/place/%D0%A0%D1%83%D0%B6%D0%B8%D0%BD,+%D0%96%D0%B8%D1%82%D0%BE%D0%BC%D0%B8%D1%80%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+13600/@49.7262779,29.183489,12.91z/data=!4m6!3m5!1s0x472cd0fe8c722495:0x3876eee7a8759f56!8m2!3d49.7220862!4d29.2112498!16zL20vMGZtdGpy?entry=ttu&g_ep=EgoyMDI1MTEwOS4wIKXMDSoASAFQAw%3D%3D">Дивитись

                                    на мапі</a>
                            </div>
                        </div>

                    </div>

                    <div className="block_wrapper_2">
                        <div className="circle_gray">


                            <div className="circle_white">
                                <img src="/dental-clinic/images/result.png" alt="" />
                            </div>
                        </div>
                    </div>



                </div>

                <div className="description_block_3">
                    <p>Ми раді вітати вас у нашій стоматологічній клініці Sigma Dent, де ми піклуємося про ваше здоров’я та
                        усмішку з найкращими спеціалістами і сучасними технологіями! Наша команда професіоналів працює над тим,
                        щоб кожен візит був комфортним, а лікування ефективним і безболісним.

                    </p>
                </div>

            </section>
        </>
    )
}
