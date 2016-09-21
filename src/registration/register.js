import React from 'react';
import Form from './form';
import Brand from './brand';
import styles from './styles.css';

const Register = () => {
    return (
        <div className={['container', styles.width].join(' ')}>
            <Brand />
            <Form />
        </div>
    );
};

export default Register;