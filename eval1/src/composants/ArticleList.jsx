

import { useEffect, useState } from "react"
import { Form } from "./Form"

export const ArticleList = (props) => {
 const [req, setReq] = useState({
     erreur : "",
     lodding : true ,
     data : []
 });

 useEffect( () => {
     fetch("https://jsonplaceholder.typicode.com/posts")
        .then( reponse => reponse.json() )
        .then( data  => setReq({
            ...req , 
            erreur : "",
            lodding : false ,
            data : data.slice(0, 3)
        }) )
        .catch( ex => setReq({
            ...req ,
            erreur : ex.message ,
            lodding : false ,
            data : []
        }) )
 } , [] );

 function handleClick(id){
    const tab = req.data.filter(article => {return article.id != id})
    setReq({...req, data : tab})
 }

 return <>

    {!req.lodding && req.erreur.length === 0 ? req.data.map((article, index) => {
        return <article key={index} className="col-4">
            <h4>{article.title}</h4>
            <p>{article.body}</p>
            <button className="btn btn-danger" onClick={() => handleClick(article.id)}>Supprimer</button>
        </article>
    }) : <p> { req.erreur } </p>}
 </>
}