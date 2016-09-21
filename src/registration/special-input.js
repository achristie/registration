import React from 'react';

const SpecialInput = ({ disabled, type, placeholder }) => {
  return (
    <input disabled={disabled} type={type} className='form-control' placeholder={placeholder} />
  );
}

export default SpecialInput