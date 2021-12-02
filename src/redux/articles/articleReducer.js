const INITIAL_STATE = {
    articles: []
}

function articleReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case "ADDARTICLE" :
            const newArr = [...state.articles]; // New arr + copie de articles
            newArr.unshift(action.payload); // Ajouter l'élement au début du tableau avec unshift
            return {
                ...state, // Récupérer tout ce qui existe déjà dans le INITIAL_STATE
                articles: newArr
            }
        case "LOADARTICLES" : {
            return {
                ...state,
                articles: action.payload
            }
        }
    }
    return state;
}

export default articleReducer;

export const getArticles = () => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        dispatch({
            type: "LOADARTICLES",
            payload: data
        })
    })
}