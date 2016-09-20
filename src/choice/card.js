import React from 'react';
import { Link } from 'react-router';
import styles from './styles.css';

const Card = (props) => {
    return (
        <Link to={props.link}>
            <div className={styles.card}>
                <h3>{props.title}</h3>
            </div>
        </Link>
    );
};

export default Card;