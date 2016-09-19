import React from 'react';
import Card from './card.js';
import styles from './styles.css';

const Choice = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-xs-4 col-xs-push-1'>
                    <Card title='Existing Users' text='Sign in here...' link='/signin'/>
                </div>
                <div className='col-xs-2'/>
                <div className='col-xs-4 col-xs-push-1'>
                    <Card title='New Users' text='Register here' link='/register'/>
                </div>
            </div>
        </div>
    );
};

export default Choice;