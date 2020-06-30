import React from 'react';
import '../components/styles/BadgesLi.css'

import logoT from '../IMAGES/iconTwitter.png'

import { Link } from "react-router-dom";
import Gravatar from '../components/Gravatar'


function useSearchBadges(badges) {

    const[query , setQuery]= React.useState('')
    const [filterBadges , setFilteredBadges]= React.useState(badges)

    /*Use memo es un hook que nos ayuda a poder buscar 
    y filtrar entre grandes listas 
    recibe dos parametros el primero es una funcion y el segundo 
    es una lista */

    React.useMemo(() =>{
        const result = badges.filter(badge => {
            return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
            
        
        
        });
        setFilteredBadges(result)
        
        
        
        
 

    }, [badges, query]); 
    return {query,setQuery ,filterBadges};
    
}

function BadgesList (props){
    const badges = props.badges
    const { query, setQuery, filterBadges}= useSearchBadges(badges)
   

        if(filterBadges.length === 0){
            return <div className="emptybadges">
                <h3>Empty</h3>
                <div className="FiltroBadges">
                    <label> Filter Badges</label>
                    <input  type="text" value={query} onChange={(e) => {
                    setQuery(e.target.value);
                    }}
                    />
                </div>
        
            </div>
        }

        return(
            <div className="BadgesList">

                <div className="FiltroBadges">
                    <label> Filter Badges</label>
                    <input placeholder="User Name" type="text" value={query} onChange={(e) => {
                    setQuery(e.target.value);
                    }}
                    />
                </div>
            
                <ul className="list-unstyled">
                    {filterBadges.map((badge) =>{
                /*en este caslo por ejemplo se entiende que vamos a necesitar
                un key para cada una de las li lo que hicimos es creaar un 
                contendor padre una lista no estilizada y lo que sigue es que con la funcion map
                para cada elemento de nuestra data vamos a retornar en vez de un objeto un elemento HTML en este 
                caso un li con un p */
                    return(
                        <li key={badge.id}>
                        
                            <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}/details`}>                     
                            <div  className="containerli">
                                <Gravatar email={badge.email} />
                                <div className="containerli__info">
                                    <h2>💎 {badge.firstName} {badge.lastName}</h2>
                                    <h3>🎓 -- {badge.jobTitle} --</h3>
                                </div>
                                <div className="contact" >
                                        <img src={logoT} />
                                        <p>@{badge.twitter} </p>
                                </div>


                            </div>
                            </Link>


                    </li>
                )

            })}
        </ul>


            </div>

        )
    }

export default BadgesList