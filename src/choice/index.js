import React from 'react';
import Card from './card.js';
import styles from './styles.css';

const Choice = () => {
    return (
        <div className={[styles.margin, 'ipreo-row'].join(' ')}>
            <Card title='Existing Users' text='Sign in here...'/>
            <Card title='New Users' text='Register here'/>
        </div>
    );
};

export default Choice;