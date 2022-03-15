import {useState} from "react"

export const Form = (props) => {
    const [form, setForm] = useState({title : "" , comment : ""})
    const [visible, setVisible] = useState(true)

    function handleChange(e){
        // récupérer la valeur saisie en fonction du champ 
        console.log(e.target.name); 
        console.log(e.target.value); 
        const { name , value } = e.target ;
        // exécuter un setForm => mise à jour du state => relancer un render 
        setForm({...form , [name]: value});
    }
    function handleSubmit(e){
        e.preventDefault(); //  bloquer le rechargement de page 
        const {title, comment} = form ;
        if(title.length > 0 && comment.length > 0){
            //console.log(form);
            setForm({title : "" , comment : ""}) // vider le formulaire
            props.setReq((prevData) => {
                prevData.ArticleList.push({title : e.target.value})
                return { ...prevData , commentaires : prevData.commentaires  }
            })
        }else {
            alert("veuillez compléter le titre ainsi que le commentaire.")
        }
    }

    return <div className="col-4 mt-4">
        <button className="mb-5" onClick={() => setVisible(!visible)}>
            {visible ? "Masquer" : "Affiche"} le formulaire
        </button>
        {visible && (
            <form onSubmit={handleSubmit}>
            <input type="text" className="form-control" name="email" value={form.title} onChange={handleChange} placeholder="titre de l'article" />
            <textarea  id="" cols="30" rows="10"  className="form-control my-3" name="commentaire" onChange={handleChange} value={form.comment} placeholder="body de l'article"></textarea>
            <button className="btn btn-success">Nouvel article</button>
        </form>
        )}
        
    </div>
}