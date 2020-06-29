import React from 'react';
import Badges from '../pages/badges'
//importamos el browser router
import {BrowserRouter, Route,Switch } from 'react-router-dom'
import BadgesNew from '../pages/badgeNew'
import BadgeEdit from '../pages/BadgeEdit'

import Home from '../pages/home'

import NotFound from '../pages/NotFound'

import Layout from '../components/layuot'
import BadgeDetailsContainer from '../pages/BadgeDetailsContainer'
//dentro de esta función vamos a integrar brouser router
function App(){
    return (
        //auí adentro se ponen las rutas de nuestra app

        /*en este caos en route lo que vamos a poner
        es el lugar do de se va a renderizar y tambien el componente que vamos a renderizar */

        /*Podemos observar doscosas la primera es que necesitamos el switch 
        esto para que pueda elegir entre las dos rutas y de esta forma solo especificar una y no renderizar las dos 
        y en este caso debemos de especificar al prop que el path va a ser completamente especifico 
        si no puede que tengamos problemas */
        /* queremos que el layout tenga contendio propio e interno lo escribiramos de esta forma
        para lograr que el swith se muestre dentro se usa un prop especial 
        llamado children*/

        /*en el caso del cuarto path el de edit 
        este tiene que trabar sobre un id especifico 
        el badgeid será un valor generico pero 
        la url se tiene hacer de esa forma para poder usar ese contenido  */
        <BrowserRouter>

     
        <Layout>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/badges" component={Badges}/>
                <Route exact path="/badges/new" component={BadgesNew}/>
                <Route exact path="/badges/:badgeId/edit" component={BadgeEdit}/>
                <Route exact path="/badges/:badgeId/details" component={BadgeDetailsContainer}/>
                <Route component={NotFound} />
            </Switch>
        </Layout>


        
        </BrowserRouter>
    );

}

export default App