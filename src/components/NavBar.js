import React from 'react';
import logo from '../IMAGES/hackclub.png'
import './styles/NavBar.css'
import { Link } from 'react-router-dom';
class NavBar  extends React.Component{
    render(){
        return (
            <div className="Navbar">
                <div className="container-fluid">
                <Link className="Navbar__brand" to="/">
                    <img className="Navbar__brand-logo" src={logo}/>
                    <span className="font-weight-light">Hack Club-</span>
                    <span className="font-weight-bold"> México</span>
                </Link>

                </div>

            </div>
        )
    }
}

export default NavBar;