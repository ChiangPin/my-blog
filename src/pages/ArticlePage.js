import React, { useState } from 'react';
import articleContent from './article-content';
import ArticlesList from '../components/ArticlesList';
import NotFoundPage from './NotFoundPage';
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvotesSection';

const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);

    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

    //called whenever url change, the name
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await fetch(`/article/${name}`);
    //         const body = await result.json();
    //         setArticleInfo(body);
    //     };
    // }, [name]);

    if (!article) return <NotFoundPage />;

    const otherArticles = articleContent.filter(article => article.name !== name);

    return (
        <>
            <h1>{article.title}</h1>
            <UpvotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo} />
            {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
            <CommentsList comments={articleInfo.comments} />
            <h3>Other Articles:</h3>
            <ArticlesList articles={otherArticles} />
        </>

    );
};

export default ArticlePage;