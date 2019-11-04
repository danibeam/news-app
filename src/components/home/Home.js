import React, { useState, useEffect } from 'react';
import Article from 'components/article/Article';
import { Typography } from '@material-ui/core';

const Home = (props) => {

    // eslint-disable-next-line no-unused-vars
    const [articles, setArticles] = useState({data: []});

    console.info(articles);
    
    return (
        <React.Fragment>
            <Typography variant="h3">
                Today's news
            </Typography>
            {
                articles.data.map((article, index) => (
                    <Article title={article.title} content={article.content} key="index"></Article>
                ))
            }
        </React.Fragment>
    )

};

export default Home;