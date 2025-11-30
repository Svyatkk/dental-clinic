import './ShowTransition.css';
import { Children, useState } from 'react';

export default function ShowTransition({ page }) {


    const pages = {
        parentPath: ""
    }


    return (
        <section className="showTransition">
            <div className='path_page'>
                <a href="/">Головна </a>
                <span>/</span>



                <a className='active' href='#/'> {page} </a>


            </div>
        </section >
    )
}