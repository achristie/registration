import React from 'react';
import Card from './card';
import styles from './styles.css';
import Separator from './separator';

const CardContainer = () => {
    return (
        <div className={styles.container}>
            <Card title='Existing Users' text='Sign in here...' link='/signin'/>
            <Separator />
            <Card title='New Users' text='Register here' link='/register'/>
        </div>
    );
};

export default CardContainer;