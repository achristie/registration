import React from 'react';
import Select from 'react-select';
import TimeZones from 'timezones.json';
import 'react-select/dist/react-select.css';

//const tz = TimeZones.map(o => o.utc.map(i => { text: o.text, value: i }; ));

const SpecialSelect = (props) => {
  console.log(TimeZones);
  return (
    <select className='form-control' />
  )
}

export default SpecialSelect;