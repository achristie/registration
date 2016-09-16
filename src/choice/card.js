import React from 'react';
import styles from './styles.css';

const Card = (props) => {
    return (
        <div className={['ipreo-col ipreo-sm ipreo-flex-align-stretched', styles.click].join(' ')}>
            <div className='ipreo-card'>
                <div className='ipreo-card-header'>
                    {props.title}
                </div>
                <div className='ipreo-card-block'>
                    {props.text}
                </div>
            </div>
        </div>
    );
};

export default Card;