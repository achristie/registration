import React from 'react';
import styles from './styles.css';
import logo from '../logo.svg';

const Brand = () => {
    return (
        <div>
            <img src={logo} width='100px' role='presentation' />
            <h1 className={styles.brandHeader}>IPREO</h1>
        </div>
    );
};

export default Brand;