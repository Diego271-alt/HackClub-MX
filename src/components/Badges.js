import React from 'react';
import logo from '../IMAGES/hackC.png';
import "../components/styles/bagde.css";
import Gravatar from './Gravatar';
/*Estamos diciendo que creamos el primer componente la clase 
bagde extiende de la clase component */
class badge extends React.Component{

    /*En este caso siempre todos los componetes requieren el metodo render define 
    lo que podemos ver en pantalla */
    render(){

        return <div className="Badge"> 
            <div className="HeaderBadge">
                <img src={logo} alt="LOGO"/>
            </div>
            <div className="UserBadge">
                <Gravatar
                 email={this.props.email}
                    />
                <h1>{this.props.firstName}<br/>{this.props.lastName}</h1>
            </div>
            <div className="FooterBadge">
                <p className="Job">{this.props.jobTitle} <br/></p>
                <p className="twitter">@ {this.props.twitter}</p>
            </div>
        </div>


    }
}


export default badge