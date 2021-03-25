import React from 'react';
import { Helmet } from 'react-helmet';
import './styles.scss';

const NotFound = () => {
    return(
        <>
            <Helmet>
                <title>Not Found 404</title>    
            </Helmet>    
            <div className="not-found heading">
                <h1>This page is not found</h1>
            </div>
        </>
    )
}
export default NotFound