import React from 'react';
import '../pages/styles/home.css';
import img1 from '../IMAGES/h1.jpg'
import FirstContainer from '../components/HomedivFirst'
import SecondContainer from '../components/HomedivSecond'
import ThirdContainer from '../components/HomedivThird'

import { Link } from 'react-router-dom';

class Home extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="stick-btn">
                    <Link  to='/badges/new' className="btn btn-primary">Come on</Link>
                </div>
                <div className="overlay" ></div>
                <div className="parallax-completo">
                </div>
                <FirstContainer />
                <div className="overlay" ></div>
 
                <div className="parallax-completo2">
                </div>
                <SecondContainer />
                <div className="overlay" ></div>

                <div className="parallax-completo3">
                </div>
                <ThirdContainer />
                <div className="overlay" ></div>
                
                <div className="parallax-completo4">
                </div>

            </React.Fragment>


        )
    }



}


export default Home