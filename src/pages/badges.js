import React, { useLayoutEffect } from 'react';

import '../pages/styles/Badges.css'
import BadgesList from '../components/BadgesList'
import { Link } from 'react-router-dom';
import api from '../api'
import PageLoading from '../components/pageLoading';

import PageError from '../components/PageError';

class Badges extends React.Component{
    /*añadiremos los metodos que funcionan con nuestro ciclo de vida de los componentes
     */

     //en el constructor se le pasan los props que los usamos para inicalizar a super clase
    //en el constructor se 
  state = {
    loading: true,
    error: null,
    
    data: undefined,
  }
  //el mejor lugar para iniciar una api es el metodo siguiente ya que aquí estamos seguros que el coidgo que la pag ya fue cargado al dom
  componentDidMount () {
    //es un metodo donde se llama la api
    this.fetchData()

  }
  //metodo 
  fetchData= async () =>{ 

    //declaramos el estado con el loading true y el error null
    /* */
    this.setState({
      loading:true,
      error:null,
      
    })

    //comenzamos la llamada a la api

    try{
    
      const data = await api.badges.list()
      this.setState({loading:false ,data :data})

    }catch(error){
      this.setState({loading:false ,error :error})


    }
  }


    /*
      constructor(props) {

        estamos inicializando la super clase en este caso
    super(props);
    console.log('1. constructor()');
        inicializamos el estado en vacio
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    console.log('3. componentDidMount()');

    el id del timeout nos va  servir para poder limpiar la memoria
    this.timeoutId = setTimeout(() => {
        se utiliza el this por que si no no va a funcionar
        asi se debe de hacer en las inyecciones de data en react

      this.setState({
        data: [
          {
            id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
            firstName: 'Freda',
            lastName: 'Grady',
            email: 'Leann_Berge@gmail.com',
            jobTitle: 'Legacy Brand Director',
            twitter: 'FredaGrady22221-7573',
            avatarUrl:
              'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon',
          },
          {
            id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
            firstName: 'Major',
            lastName: 'Rodriguez',
            email: 'Ilene66@hotmail.com',
            jobTitle: 'Human Research Architect',
            twitter: 'MajorRodriguez61545',
            avatarUrl:
              'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon',
          },
          {
            id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
            firstName: 'Daphney',
            lastName: 'Torphy',
            email: 'Ron61@hotmail.com',
            jobTitle: 'National Markets Officer',
            twitter: 'DaphneyTorphy96105',
            avatarUrl:
              'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon',
          },
        ],
      });
    }, 3000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('5. componentDidUpdate()');
    estamos mostrando los props previos a la actualizacion
    
    console.log({
      prevProps: prevProps,
      prevState: prevState,
    });

    console.log({
      props: this.props,
      state: this.state,
    });
  }

  componentWillUnmount() {

    console.log('6. componentWillUnmount');7
    en este caso lo que estamos haciendo es que con clear timeout estamos
    evitando que falle una actualización de un componente que desaparezca
    por ejemplo si se llega a cambiar de pag y los componentes no pueden actualizarse 
    se debe de hacer esto para evitarnos un warning
    
    clearTimeout(this.timeoutId);
  } */





    render(){

      if(this.state.loading === true){
        return <PageLoading />;
      }
      if(this.state.error){
        return <PageError error = {this.state.error} />
      }
        return (

            <React.Fragment>
                
                <div className="Badges">
                    <div className="Badges__hero">

                    </div>
                </div>
                <div className="Badge__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">
                            New Badge
                        </Link>
                    </div>
                    <div className="Badges__list">
                        <div className="Badges__container">
                            <BadgesList badges={this.state.data} />
                        </div>

                    </div>


                </div>

            </React.Fragment>

        );

    }
}

export default Badges