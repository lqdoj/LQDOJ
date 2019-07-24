import React from 'react';
import {Link} from 'react-router-dom';
const NotFound = () =>{
    return(
        <div>
            This Page Not Found <br></br>
            Return to <Link to="/">HomePage</Link>
        </div>
    )
}

export default NotFound;