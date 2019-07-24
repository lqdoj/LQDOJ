import React from 'react';
import {NavLink} from 'react-router-dom';
import PATH from '../../Path';

const displaySections = (sections) =>
{
    return sections.map(section=>
        {
            return (
                <NavLink to={PATH[section]}> {section} </NavLink>
            )
        })
}

const Navbar = (props) =>{
    console.log(props.listOfSections);
    return (
        <div id="navbar">
            {displaySections(props.listOfSections)}
        </div>
    );
};

export default Navbar;