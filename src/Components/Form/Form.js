import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './Form.css'

export default function Form() {

    // Déclaration du title et du body en state
    const [article, setArticle] = useState({
        title: "",
        body: ""
    })

    // Déclaration du dispatch
    const dispatch = useDispatch();

    // Annulation du comportement par defaut du form submit pour éviter de rafraichir la page lors de l'envoie
    const handleForm = e => {
        e.preventDefault();

        // Le dispatch envoie vers le reducer
        dispatch({
            type: 'ADDARTICLE',
            payload: article // Les données envoyées
        })

        setArticle({
            title: "",
            body: ""
        })
    }

    // Surveille les changements des inputs
    const handleInput = e => {

        // Si la target possède la classe inp-title
        if (e.target.classList.contains('inp-title')) {
            // Création d'une nouvelle const qui récupère la valeur du input
            const newObjState = { ...article, title: e.target.value };
            // Mise à jour du title de l'article
            setArticle(newObjState);
        } else if (e.target.classList.contains('inp-body')) {
            const newObjState = { ...article, body: e.target.value };
            // Mise à jour du body de l'article
            setArticle(newObjState);
        }

    }

    console.log(article);

    return (
        <>
            <h1 className="title-form">Écrivez un article</h1>

            <form onSubmit={handleForm} className="container-form">

                <label htmlFor="title">Titre</label>
                <input
                    onChange={handleInput}
                    value={article.title} // Two way data binding
                    type="text"
                    id="title"
                    placeholder="Entrez votre nom"
                    className="inp-title" />

                <label htmlFor="article">Votre article</label>
                <textarea
                    onChange={handleInput}
                    value={article.body} // Two way data binding
                    id="article"
                    placeholder="Votre article"
                    className="inp-body"></textarea>

                <button>Envoyez l'article</button>

            </form>
        </>
    )
}
