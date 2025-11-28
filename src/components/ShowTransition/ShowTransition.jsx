import './ShowTransition.css';
import { useState } from 'react';

export default function ShowTransition({ page_name }) {

    const arrayOfPage = []

    arrayOfPage.push(page_name)

    const [page, setPage] = useState(arrayOfPage)





    return (
        <section className="showTransition">
            <div className='path_page'>


                <div>
                    <a href="">Головна</a> {arrayOfPage}
                </div>


            </div>


        </section>

    )
}