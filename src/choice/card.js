import React from 'react';
import { Link } from 'react-router';

const Card = (props) => {
    return (
        <Link to={props.link}>
            <div className='panel panel-default'>
                <div className='panel-heading'>
                    <h3 className='panel-title'>{props.title}</h3>
                </div>
                <div className='panel-body'>
                    {props.text}
                </div>
            </div>
        </Link>
    );
};

export default Card;