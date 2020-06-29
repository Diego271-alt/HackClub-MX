import React from 'react'


import PageLoading from '../components/pageLoading'
import PageError from '../components/PageError'
import api from '../api'



import BadgeDetails from '../pages/BadgedDetails'

class BadgeDetailsContainer extends React.Component{

    state ={
        //inicializamos
        loading:true,
        error:false,
        data:undefined,
        modalIsOpen:false,
        
        


    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async () =>{
        this.setState({loading:true , error:null})
        try{
            /*se intenta la llamada y se saca del params para obtener 
            esepcificamente al que le damos clicl y eso lo hacemos de 
            la url con el read
             */
            const data = await api.badges.read(this.props.match.params.badgeId)
            this.setState({loading:false , data:data})
        }catch(error){
            this.setState({loading:false , error:error})
        }
    }

    handleOpenModal= e => {
        this.setState({modalIsOpen: true})

    }
    handleCloseModal= e => {
        this.setState({modalIsOpen: false})

    }

    handleDeleteModal= async e =>{
        this.setState({loading:true})
        try{
            await api.badges.remove(this.props.match.params.badgeId)
            this.props.history.push('/badges')
        }catch(error){
            this.setState({loading:false, error:error})


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
            <BadgeDetails onCloseModal={this.handleCloseModal} 
            onOpenModal={this.handleOpenModal}  
            modalIsOpen={this.state.modalIsOpen} 
            onDeleteBadge={this.handleDeleteModal}
            badge={badge} />

        )
    }
}

export default BadgeDetailsContainer;