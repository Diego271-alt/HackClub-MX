import React from 'react'

import Navbar from './NavBar'

function Layout (props) {
    /* el prop de children nos sirve para poder
    usar el layout dentro de nuestros elementosen los compoentes funcionales los props vienen como argumento
     */

     /*ponemos esta estructura por que de esta forma es que el props.children va a funcionar
     de manera correcta
      */

      /*EN ESTE CAOS LO QUE PASA CON EL REACT.FRAGMENT ES QUE 
      LE ESTAMOS DICIENDO A REACT QUE VAMOS A REGRESAR MAS DE UN
      ELEMENTO y nos evita el uso del div sin sentido que solemos utilizar
      */
    return (
        <React.Fragment>
            <Navbar / >
                {props.children}
        </React.Fragment>







    );



}


export default Layout;