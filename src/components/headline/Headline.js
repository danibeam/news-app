import React from 'react';
import './Headline.css';

import { Button, Typography } from '@material-ui/core';

const Article = (props) => {
    return (
        <div className="headline">
            <Typography variant="h4">{props.title}</Typography>

            <Typography variant="body1">
                {
                    props.content ? 
                        props.content
                    :
                        'No content to be displayed'
                }
            </Typography>
        </div>

    )
};

export default Article;