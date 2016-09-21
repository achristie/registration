import React from 'react';
import styles from './styles.css';
import FormGroup from './form-group';
import SpecialInput from './special-input';
import SpecialSelect from './special-select';

const Form = () => {
  return (
    <form className='form-horizontal'>
      <FormGroup labelFor='email' label='Email'>
        <SpecialInput placeholder='Email' type='email' disabled={true} />
      </FormGroup>
      <FormGroup labelFor='givenName' label='Given Name'>
        <SpecialInput placeholder='Given Name' type='string' />
      </FormGroup>
      <FormGroup labelFor='familyName' label='Family Name'>
        <SpecialInput placeholder='Family Name' type='string' />
      </FormGroup>
      <FormGroup labelFor='displayName' label='Display Name'>
        <SpecialInput placeholder='Display Name' type='string' />
      </FormGroup>
      <FormGroup labelFor='timeZone' label='Time Zone'>
        <SpecialSelect />
      </FormGroup>
      <hr />
      <FormGroup labelFor='password' label='Password'>
        <SpecialInput placeholder='Password' type='password' />
      </FormGroup>
      <FormGroup labelFor='confirmPassword' label='Confirm Password'>
        <SpecialInput placeholder='Confirm Password' type='password' />
      </FormGroup>
      <hr />
      <FormGroup labelFor='securityQuestion1' label='Security Question'>
        <SpecialSelect />
        <div className={styles.margin} />
        <SpecialInput type='string' />
      </FormGroup>
      <FormGroup labelFor='securityQuestion2' label='Security Question'>
        <SpecialSelect />
        <div className={styles.margin} />
        <SpecialInput type='string' />
      </FormGroup>
      <hr />
      <div className='row'>
        <div className='col-sm-3 col-sm-offset-9'>
          <button type='submit' className='btn btn-primary btn-lg btn-block'>
            Submit
          </button>
        </div>
      </div>          
    </form>
  );
};

export default Form;
