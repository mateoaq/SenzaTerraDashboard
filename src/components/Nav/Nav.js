import React from 'react';
import './Nav.css';
import ultimaActualizacion from '../../functions/ultimaActualizacion';
export const Nav = (props) => {
    return (
        <div className='Nav'>
            <div className='Nav-container'>
                <div className='vacio'>
                </div>
                <div className='temp'>
                    <div className='textCenter'>
                        <h3>Temperatura actual: {props.act ?? 'Error'}°C</h3>
                    </div>
                    <div className='textCenter'>
                        <h3>Humedad actual: {props.hum ?? 'Error'}%</h3>
                    </div>
                    <div className='textCenter'>
                        <h3>Max: {props.max ?? 'Error'}°C</h3>
                    </div>
                    <div className='textCenter'>
                        <h3>Min: {props.min ?? 'Error'}°C</h3>
                    </div>
                </div>
                <div className='rep'>
                    <div className='textCenter'>
                        <h3>Última actualización: {ultimaActualizacion(props.tempArray)}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}