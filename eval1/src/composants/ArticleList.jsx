

import { useEffect, useState } from "react"
import { Form } from "./Form"

export const ArticleList = () => {
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
            data : data
        }) )
        .catch( ex => setReq({
            ...req ,
            erreur : ex.message ,
            lodding : false ,
            data : []
        }) )
 } , [] );

 function deleteItem(e){
    const name = e.target.name
    this.setReq({name})
 }

 return <>
    <Form setReq={setReq} />
    {!req.lodding && req.erreur.length === 0 ? req.data.slice(0,3).map((article, index) => {
        return <article key={index} className="col-4">
            <h4>{article.title}</h4>
            <p>{article.body}</p>
            <button name={index} className="btn btn-danger" onClick={deleteItem}>Supprimer</button>
        </article>
    }) : <p> { req.erreur } </p>}
 </>
}