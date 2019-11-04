import React from 'react';
import { Button, Typography } from '@material-ui/core';

const Article = (props) => {
    return (
        <React.Fragment>
            <h1>{props.title}</h1>

            <Typography variant="body1">
                {props.content}
            </Typography>
        </React.Fragment>
    )
};

export default Article;