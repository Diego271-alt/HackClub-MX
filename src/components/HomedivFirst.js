import React from 'react'
import img1 from '../IMAGES/h1.jpg'
import img2 from '../IMAGES/h2.jpg'
import img3 from '../IMAGES/h3.jpg'
import '../components/styles/homeFirst.css'
function FirstContainer(){


    return(
        <div className="container-grid">
        <div  className="TitleGeneral">
            <h1> 👨‍💻 HACK CLUB ? 👩‍💻 </h1>

        </div>

        <div className="cards">
        <div className="container-cards" id="first" >
            <figure >
                <img src={img1} className="frontal"/>
                <figcaption className="trasera">
                    <h2>Hola mundo cruel </h2>

                </figcaption>

            </figure>
        </div>

        <div className="container-cards" id="second" >
            <figure className>
                <img src={img2} className="frontal"/>
                <figcaption className="trasera">
                    <h2>Hola mundo cruel </h2>

                </figcaption>

            </figure>            

        </div>
        <div className="container-cards" id="third">
            <figure className>
                <img src={img3} className="frontal"/>
                <figcaption className="trasera">
                    <h2>Hola mundo cruel </h2>

                </figcaption>

            </figure>
        </div>






        </div>
   

    </div>




    );
}


export default FirstContainer;