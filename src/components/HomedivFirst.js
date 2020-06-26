import React from 'react'
import img1 from '../IMAGES/h1.jpg'

function FirstContainer(){


    return(
        <div className="container-grid">
        <div className="container-Felement" >
            <figure>
                <img src={img1} className="frontal"/>
                <figcaption className="trasera">
                    <h2>Hola mundo </h2>

                </figcaption>

            </figure>

            

        </div>
        <div className="container-Selement" >
            <div className="imgS1"></div>
            <div className="infoS1">
                <h3>Stickers</h3>
            </div>
            <div className="imgS2"></div>
            <div className="infoS2">
                <h3>Hackathons</h3>
            </div>
        </div>

    </div>




    );
}


export default FirstContainer;