import React from 'react'

import '../pages/styles/BadgeDetails.css'
import logo from '../IMAGES/hackC.png'
import PageLoading from '../components/pageLoading'
import PageError from '../components/PageError'
import api from '../api'
import Badge from '../components/Badges'

class BadgeDetails extends React.Component{

    state ={
        loading:true,
        error:false,
        data:undefined
        
        


    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async () =>{
        this.setState({loading:true , error:null})
        try{
            const data = await api.badges.read(this.props.match.params.badgeId)
            this.setState({loading:false , data:data})
        }catch(error){
            this.setState({loading:false , error:error})
        }
    }


    
    render(){
        if(this.state.loading){
            return <PageLoading />
        }

        if(this.state.error){
            return <PageError error={this.state.error} />
        }

        const badge =this.state.data

        return (
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

                        </div>

                    </div>

                </div>




            </div>
        )
    }
}

export default BadgeDetails;