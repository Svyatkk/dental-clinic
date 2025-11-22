import React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import './Specialists.css';


function SlideNextButton() {
    const swiper = useSwiper()

    return (
        <button onClick={() => swiper.slideNext()}>Next </button>


    )
}
function SlidePrevButton() {
    const swiper = useSwiper()



    return (
        <button onClick={() => swiper.slidePrev()}>Prev</button>
    )
}

export default function Specialists() {


    return (
        <section className="specialists">

            <div className="block_specialists_wrapper">
                <div className="block_specialists">
                    <h2>Про спеціалістів нашої кліники
                    </h2>
                    <p>У нашій клініці працює колектив висококваліфікованих лікарів-стоматологів, які віртуозно володіють інноваційними методами діагностики та лікування, що дозволяє боротися навіть з найважчими захворюваннями та повертати пацієнтам здорове життя і сяючу усмішку.
                    </p>
                    <a href="">Детальніше про нас <span>&#8594;</span></a>

                </div>


                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation={true}
                    modules={[Navigation]}
                    className="swiper">
                    <SwiperSlide className="swiper-slide">slide1</SwiperSlide>
                    <SwiperSlide className="swiper-slide">slide2</SwiperSlide>
                    <SwiperSlide className="swiper-slide">slide3</SwiperSlide>
                    <SwiperSlide className="swiper-slide">slide4</SwiperSlide>



                </Swiper>
            </div>

        </section >
    )
}