import { useContext, createContext, useState, useEffect } from "react";

const ArticleContext = createContext();
export const useArticles = () => useContext(ArticleContext);

export const ArticleProvider = ({ children }) => {
    const apiUrl = 'https://win23-assignment.azurewebsites.net/api/articles';
    const [article, setArticle] = useState(null);
    const [articles, setArticles] = useState([]);
    const [threeArticles, setThreeArticles] = useState([]);

    useEffect(() => {
        getArticle();
        getArticles();
        getThreeArticles();
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

    //limit för att vara dynamisk, t.ex om take ska vara 6, 9 etc
    const getThreeArticles = async (limit) => {
        try {
            if (limit) {
                let result = await fetch(`${apiUrl}?take=${limit}`);
                setThreeArticles(await result.json());
            }
        }
        catch {
            console.error('Could not fetch article');
        }
    }

    return (
        <ArticleContext.Provider value={{ article, articles, threeArticles, getArticle, getArticles, getThreeArticles }}>
            {children}
        </ArticleContext.Provider>
    )
}

