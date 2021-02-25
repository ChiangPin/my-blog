import React from 'react';
import articleContent from './article-content';
import ArticlesList from '../components/ArticlesList';

const ArticlesListPage = () => (
    <>
        <h1>Lists</h1>
        <ArticlesList articles={articleContent}></ArticlesList>
    </>

);

export default ArticlesListPage;