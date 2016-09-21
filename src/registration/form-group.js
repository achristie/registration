import React from 'react';

const FormGroup = ({ labelFor, label, children }) => {
  return (
    <div className='form-group'>
      <label htmlFor={labelFor} className='col-sm-3 control-label'>{label}</label>    
      <div className='col-sm-9'>
        {children}
      </div>
    </div>
  );
}

export default FormGroup;