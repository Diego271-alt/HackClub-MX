import React from 'react'
import {Link} from 'react-router-dom'
import '../pages/styles/BadgeDetails.css'
import logo from '../IMAGES/hackC.png'
import Badge from '../components/Badges'

import Modal from '../components/Modal'


import DeleteBadgeModal from '../components/DeleteBadgeModal'


function BadgesDetails(props) {
    const badge =props.badge
/*en este caso lo que vamos a crear es el portal podemos verlo en
 {ReactDOM.createPortal} es lo qu enos va a permitir crear el portal para poder 
 este recibe dos argumentos el que y el donde el que puede ser un elemento y el donde usamos un elemento*/


 /*el props isOpne nos sirve para saver si se va a mandar a llamar o si se va a desplegar el archivo en este caso 
 es como gacer una confirmacion */
    return(
        <div>
        <div className="BadgeDetails__hero">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src={logo} alt="logo de el usuario"/>

                    </div>
                    <div className="col-6  BadgeDetails__hero-attendant-name ">
                        <h1>{badge.firstName} {badge.lastName} </h1>

                        

                    </div>

                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <Badge firstName={badge.firstName} lastName={badge.lastName} email={badge.email} jobTitle={badge.jobTitle} twitter={badge.twitter}/>

                </div>
                <div className="col">
                    <h2>
                        Actions
                    </h2>
                    <div>
                        <div><Link className="btn btn-primary mb-4" to={`/badges/${badge.id}/edit`}>Edit</Link></div>
                    </div>
                    <div>
                        <button onClick={props.onOpenModal}  className="btn btn-danger">Delete</button>
                        <DeleteBadgeModal 
                        isOpen={props.modalIsOpen} 
                        onClose={props.onCloseModal}
                        onDeleteBadge={props.onDeleteBadge}
                        />
                    </div>
                </div>

            </div>

        </div>




    </div>



        
    );

    
} 

export default BadgesDetails