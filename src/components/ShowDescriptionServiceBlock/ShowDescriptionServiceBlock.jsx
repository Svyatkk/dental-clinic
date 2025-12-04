
import { DataServiceDescription } from "../Data/DataServiceDescription"
import './ShowDescriptionServiceBlock.css';


export default function ShowDescriptionServiceBlock({ object }) {


    const SelectedObject = DataServiceDescription.find(
        item => item.h1 === object.name
    )

    return (
        <>



            <section className="desc_service">
                <h1>{SelectedObject.h1}</h1>
                <img src={SelectedObject.img}></img>
                <h3>{SelectedObject.h3}</h3>
                <p>{SelectedObject.p1}</p>
                <p>{SelectedObject.p2}</p>
            </section>
        </>
    )
}