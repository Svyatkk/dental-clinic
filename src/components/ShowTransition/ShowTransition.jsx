import './ShowTransition.css';
import { Children, useState } from 'react';

export default function ShowTransition({ page, object }) {

    if (!object || typeof object !== "object") object = {}

    const entries = Object.entries(object).filter(([key]) => key === "name")

    function RenderParent() {
        if (entries.length > 0) {
            return (
                <>
                    <a href="#/services">Послуги</a>
                    <span>/</span>
                </>
            )
        }

        return null
    }

    return (
        <section className="showTransition">
            <div className='path_page'>
                <a href="/">Головна </a>
                <span>/</span>
                {RenderParent()}
                <a className='active' href='#/'>{page}</a>
            </div>
        </section>
    )
}
