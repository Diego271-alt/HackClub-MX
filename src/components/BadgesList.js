import React from 'react';
import '../components/styles/BadgesLi.css'

import logoT from '../IMAGES/iconTwitter.png'

import { Link } from "react-router-dom";
import Gravatar from '../components/Gravatar'


class BadgesList extends React.Component{

    render( ){
        if(this.props.badges.length === 0){
            return <div>
                <h3>Empty</h3>

                <Link className= "btn btn-primary" to="=/badges/new"> Create Your first Badge</Link>
            </div>
        }
        return(
            <ul className="list-unstyled">
            {this.props.badges.map((badge) =>{
                /*en este caslo por ejemplo se entiende que vamos a necesitar
                un key para cada una de las li lo que hicimos es creaar un 
                contendor padre una lista no estilizada y lo que sigue es que con la funcion map
                para cada elemento de nuestra data vamos a retornar en vez de un objeto un elemento HTML en este 
                caso un li con un p */
                return(
                    <li key={badge.id}>
                        
                        <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}/details`}>



                     
                        <div  className="containerli">
                            <Gravatar email={badge.email} />
                            <div className="containerli__info">
                                <h2>{badge.firstName} {badge.lastName}</h2>
                                <h3>{badge.jobTitle}</h3>
                            </div>
                            <div className="contact" >
                                    <img src={logoT} />
                                    <p>@{badge.twitter}</p>
                            </div>


                        </div>
                        </Link>


                    </li>
                )

            })}
        </ul>
        )
    }

}

export default BadgesList