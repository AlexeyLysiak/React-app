import React from 'react';
import s from './Greeting.module.css';

function Greeting(props) {
  return (
    <h3 className={s.greet}>{props.text}</h3>
  )
}
export default Greeting;