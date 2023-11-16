import { useContext, createContext, useState, useEffect } from "react";

const ArticleContext = createContext();
export const useArticles = () => useContext(ArticleContext);

export const ArticleProvider = ({ children }) => {
    const apiUrl = 'https://win23-assignment.azurewebsites.net/api/articles';
    const [article, setArticle] = useState(null);
    const [articles, setArticles] = useState([]);
    const [multipleArticles, setMultipleArticles] = useState([]);

    useEffect(() => {
        getArticle();
        getArticles();
        getMultipleArticles();
    }, [])

    const getArticle = async (id) => {
        if (id !== undefined) {
            const result = await fetch(`${apiUrl}/${id}`)

            if (result.status === 200) {
                setArticle(await result.json());
            }
        }
    }

    const getArticles = async () => {
        try {
            const result = await fetch(apiUrl);
            setArticles(await result.json());
        }
        catch {
            console.error('Could not fetch article');
        }
    }

    const getMultipleArticles = async (limit) => {
        try {
            if (limit) {
                let result = await fetch(`${apiUrl}?take=${limit}`);
                setMultipleArticles(await result.json());
            }
        }
        catch {
            console.error('Could not fetch article');
        }
    }

    return (
        <ArticleContext.Provider value={{ article, articles, multipleArticles, getArticle, getArticles, getMultipleArticles }}>
            {children}
        </ArticleContext.Provider>
    )
}