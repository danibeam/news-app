import React from 'react';
import './Headline.css';

import { Button, Typography } from '@material-ui/core';

const Article = (props) => {
    return (
        <div className="headline">
            <Typography variant="h4">{props.title}</Typography>
            <Typography variant="subtitle2">{props.author}</Typography>
            <Typography variant="body1">
                {
                    props.content ? 
                        props.content
                    :
                        'No content to be displayed'
                }
            </Typography>
            <Button variant="contained">
                Read more
            </Button>
        </div>

    )
};

export default Article;