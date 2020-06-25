import React from 'react';

 import Bagde from '../components/Badges'
 import BadgeForm from '../components/BadgeForm.js'
import '../pages/styles/BadgeNew.css'
import api from '../api'
import { Link } from 'react-router-dom';
import PageLoading from '../components/pageLoading'

/*en este codigo es muy sencillo entender que jobtitle y los demas son props de REACT que se pasan y se imprimen ahí de esta forma 
lo que estamos haciendo es ir pasando varoles especificos */
class BadgeNew extends React.Component{

    //vamos a levantar el estado y con esto nos referimos a que vamos a conseguir que 
    //lo que se escribe en los forms se traslade aca
    state = {
        loading: false,
        error: null,
        //es una propiedad para inicarla
        form: {
            firstName: "",
            lastName: "",
            email: "",
            jobTitle: "",
            twitter: "",
  

        },

    }
    
    handleChange = e =>{

        //lo que esta generando esto así tal cual es que solo se guarde un valor y los demas se sobre escriban

        /* 
        this.setState({
            form: {
                /*con esto lo que estamos haciendo es basicamente lo que teniamos
                anteriormente 
                va arecibir el evento y le hara un set state con un objeto y la proìedad form será la que tendra la
                info de le evento
                [e.target.name]: e.target.value,
            }
        })*/


        //una forma de solucionar el problema anterior
        /*Se hace una copia del estado del form 
    const nextForm = this.state.form;
        nextForm[e.target.name]= e.target.value;
        this.state({
            form: nextForm
        });*/
        /*lo que se pod´ria hacer es dejar caer os valores del form anteriormente y se le añade uno nuevo */
        this.setState({
            form: {
                //de indica que se dejan caer los valores anteriores y se da uno nuevo
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };


     handleSubmit = async  e =>{
        e.preventDefault();
        this.setState({loading:true, error:null});
        try{
            await api.badges.create(this.state.form)
            this.setState({loading:false});
            //este es un prop que las rutas de react router reciben 
            /*en esre caso lo que estamos haciendo es 
            que si es que se cumple que la llamada sea exitosa esta una vez le demos en save 
            no mande directamente a la pagina de badges */
            this.props.history.push('/badges')

        }catch(error){
            this.setState({
                loading:false , 
                error: error
            })

        }
    }
    render(){
        if(this.state.loading){
            return <PageLoading />
        }
        //vamos colocar en la etiqueta que necesitavamos de badge form
        /*vamos a pober ahí el meotodo onchange y el this para aque de esta forma este sea
        obtenido como una propiedad luego esta tebemos que indicarla en el form en este caso será en badge form
        lo que se debe de hacer es obtener en el local de badge new entnces se le pasa 
        el valor del formulario desde el badge new al badge form con el formvalues
     */
        return (
        <React.Fragment>
         
            <div className="BadgeNew__hero">
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Bagde firstName={this.state.form.firstName || 'First_Name'}
                        lastName={this.state.form.lastName || 'Last_Name'} 
                        twitter={this.state.form.twitter || 'Your Twitter'}  
                        jobTitle={this.state.form.jobTitle || 'Your Job Title'}
                        email= {this.state.form.email || 'Email'} 

                        />
                    <div className="container-view">
                    <Link to='/badges' className="btn btn-primary" id="view">View All Participants</Link>
                        </div>
                    </div>

                    <div className ="col-6"> 
                    <BadgeForm  
                        onChange={this.handleChange} 
                        formValues={this.state.form}
                        onSubmit ={this.handleSubmit}
                        error = {this.state.error}
                     />

                    </div>

                </div>

            </div>
        </React.Fragment>)
    }
}

export default BadgeNew;