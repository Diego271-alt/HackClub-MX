import React from 'react'
import {Link} from 'react-router-dom'
import '../pages/styles/BadgeDetails.css'
import logo from '../IMAGES/hackC.png'
import Badge from '../components/Badges'

import Modal from '../components/Modal'


import DeleteBadgeModal from '../components/DeleteBadgeModal'

function useIncreaseCount(max) {
    const [count , setCount]= React.useState(0)
    if(count > max){
        setCount(0)
    }

    return[count, setCount]

}



function BadgesDetails(props) {
    const badge =props.badge
/*en este caso lo que vamos a crear es el portal podemos verlo en
 {ReactDOM.createPortal} es lo qu enos va a permitir crear el portal para poder 
 este recibe dos argumentos el que y el donde el que puede ser un elemento y el donde usamos un elemento*/


 /*el props isOpne nos sirve para saver si se va a mandar a llamar o si se va a desplegar el archivo en este caso 
 es como gacer una confirmacion */


 /*en los hooks
 podemos observar los hooks en este caso en React 
 esta funcion nos va a regresar dos argumentos y los debemos de recibir
 en la primera posicion debe de ir una variable en este caso igual que cuando ocupabamos el set state
 el etado se puede inicializar en el argumento inicial del use set state
  */
    const [count, setCount ]= useIncreaseCount(4);

    return(
        <div>
            <div className="containerbadge">
            <div className="containeractions">
                    <div className="actions">
                        <h2>
                        Actions 📚
                     </h2>
                        <div className="actionsbuttons">

                                <Link className="btn btn-primary " to={`/badges/${badge.id}/edit`}>Edit</Link>
                                <Link className="btn btn-primary " to={`/badges`}>Back</Link>
                                <button onClick={props.onOpenModal}  className="btn btn-danger">Delete</button>
                                <DeleteBadgeModal 
                                isOpen={props.modalIsOpen} 
                                onClose={props.onCloseModal}
                                onDeleteBadge={props.onDeleteBadge}
                                />
                        </div>
    

 

                    </div>
     
                </div>
                <div className="badge">
                    <Badge firstName={badge.firstName} lastName={badge.lastName} email={badge.email} jobTitle={badge.jobTitle} twitter={badge.twitter}/>

                </div>
        
            </div>






    </div>



        
    );

    
} 

export default BadgesDetails