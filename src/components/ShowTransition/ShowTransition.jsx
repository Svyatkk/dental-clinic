import './ShowTransition.css';
import { useState } from 'react';

export default function ShowTransition({ page }) {




    return (
        <section className="showTransition">
            <div className='path_page'>
                <a href="/">Головна </a>
                <span>/</span>
                <a className='active' href='/'> {page.name_of_page} </a>
            </div>
        </section>

    )
}