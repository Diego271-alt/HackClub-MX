import React, { Component } from 'react';
import '../components/styles/BadgeForm.css'

class BadgeForm extends React.Component{
    //debemos inicializar el estaod de esta manera
    //para que pueda funcionar 

  
    /*para poder mostrar lo que estamos guardando debemos mostrar un metodo
    el siguiente es un ejemplo del ismo ç
    nosotros tenemos eventos en este caso uno de ellos es el onchange*/
    /*comento este handle change ya que este  lo que va a hacer es que 
    lo va a mostrar eb el state de este componenre pero no hará más que eso en cambio lo que haremos
    es pasar como props la propiedad onchange a el badge principal y de esta manera vamos a generar el cambio */
    /*handleChange =(e) =>{
        
        // el primer evento es value que nos imprime en este caso el estado 
        //de lo que se esta escribiendo del target de lo que pones en el formulario 

        /*el name nos da como resuktado el name de el elemento donde se esta generando este cambio */
       /* console.log({
            name: e.target.name,
            value: e.target.value,

        });
        // vamos a guardar la info que vamos a obtener de el evento onchange
        this.setState({
            //con esto vamos a indentificar que componente es el que llama a nuestra función
            [e.target.name]: e.target.value,
            //para leer el estatdo se usa this.state para 
        })


    }*/
    handleClick =(e) =>{
        //en este caso lo que pasa es que no hay ni nombre ni valore solo se avisa que paso algo
        console.log("click");


    }

    //para que el  formulario no se mande tenemos que :
    //

    /*
    handleSubmit =(e) =>{
        e.preventDefault();
        console.log(this.state)



    }*/
    render(){
        return(

            <div className="formulario">

                <form onSubmit={this.props.onSubmit} >
                <h1 className="title">
                    New Comment
                </h1>
                    <div className="form-group">
                        <label >First Name</label>
                         <input placeholder="Hack Club" onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="firstName" 
                            value={this.props.formValues.firstName}/>
                        </div>
                        <div className="form-group">
                            <label >Last Name</label>
                            <input placeholder="México" onChange={this.props.onChange} 
                            className="form-control" 
                            type="text"
                            name="lastName" 
                            value= {this.props.formValues.lastName}
                            />
                        </div>
                        <div className="form-group">
                            <label >Email</label>
                            <input placeholder="user@algo.com"
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="email" 
                            name="email" 
                            value={this.props.formValues.email}/>
                        </div>
                        <div className="form-group">
                            <label >JobTitle</label>
                            <input placeholder="Hack Club instructor"
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="jobTitle" 
                            value={this.props.formValues.jobTitle}/>
                        </div>
                        <div className="form-group">
                            <label >Twitter</label>
                            <input placeholder="@Hack Club"
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="twitter" 
                            value={this.props.formValues.twitter}/>
                        </div>

                        <button onClick={this.handleClick}  className="btn btn-primary">Save</button>
                        {this.props.error && (<p className="text-danger">{this.props.error.message}</p>)}
                    </form>

            </div>       
            )

    }
}
export default BadgeForm;