import React from 'react';
import styles from './styles.css';
import logo from '../logo.svg';

const Brand = () => {
    return (
        <div className='row'>
            <div className='col-sm-10 col-sm-offset-1 col-lg-8 col-lg-offset-2'>
                <img src={logo} width='150px' role='presentation' />
                <div className={styles.registration}>
                    <span className={styles.span}> Registration </span>
                </div>
            </div>
        </div>
    );
};

export default Brand;