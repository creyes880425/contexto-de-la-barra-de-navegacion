import React from 'react'
import { useContext } from 'react';
import NameContext from '../context/NameContext';

export const Form = () => {

    const { setName } = useContext(NameContext);

    const nameUpdate = (e) => {
        const { value } = e.target;
        setName(value);
    }

    return (
        <div className="form">
            <h2>Your Name: </h2>
            <input type="text" name="name" id="name" onChange={ nameUpdate }/>
        </div>
    )
}
