// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);
//siempre vamos a necesitar estos dos
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

import '../src/global.css'

//este nuevo componente es el interesante 
import App from '../src/components/App.js'
//const element = <h1>Hello, Platzi Badges!</h1>;
//'elemento',{atributos},'cosas'
// const element = React.createElement('a',{href: '/', },'Hola soy chlid')

let title="hola punto"
//const element = React.createElement('h1',{},`Hey ${title}`);
//en este caos entre parentesis podremos ver que existen 
//const jsx= <h1>Hola perro {title}</h1>


//const jsx = (<div><h1>Romero mora</h1></div>);
//otra forma

const element= React.createElement(
    'div',{}, React.createElement(
        'h1',{},"diego romero mora"
    ),
    React.createElement(
        'h2',{},"estudiante"
    )
);
const container = document.getElementById('app')

//con esto estamos mandando a llamar las paginas y el lugar donde vamos a poner las cosas 
// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<App/>, container);



/*CICLOS DE VIDA DE UN C0MPONEHTE
En el montaje se dice que cuando pasa se inserta codigo al dom
se llaman los metodos constructor
render componentdidmount


el constructor: acá se inciializan estados y valores
render: se calcula lo que el elemento necesita y se introduce

componentDidMount se llama cuando el componente ya esta visible en pantalla 

Actualización 

cuando pcurre un cambio se dice que fue actualizado el componente vuelve a renderizarse el segundo 
paso se llama
cuando:

en el primer paso se llama al render
el segundo paso es
llamar a componentDidUpdate que recibe los datos como los props anteriores y el estado 

el desmonatje se hace cuando el componente desaparece
solo se llama un metodo llamada componenteWIllUnmount

*/



/*Muchas veces es mejor renderizar csas en nodos diferentes 
en este caso todo se renderiza en app en el reac dom
pero react tiene algunas otras herramientas
en este caso vamos a utiliz<ar los famosos 
portales de react que funcionan como el react dom render
pero en este caso lo que pasa es que se puede renderizar fuera de la app*/


/*Los componententes funcionales no manejan estados y se hacen desde 
las clases si es lo que vas a hacer ,anejar estados
hooks
por ejemplo
perimte que los componentes funcionales tengan

useState para manejar el estado 

useEffect Para subir el componente al su ciclo de vida

useReducer para ejecutar un efecto basado en una acción

la regla es que cualquier hook en el nombre debe de empesar con use

un hook nunca se puede implementar condiconalmente 



*/