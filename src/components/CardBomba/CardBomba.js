import React, { useState } from 'react';
import './CardBomba.css'

export const CardBomba = (props) => {
    const [open, setOpen] = useState(false);

    function handleClick() {
        setOpen(!open)
    }
    return (
        <div className='Card'>
            <div className='Card-title'>
                <div>
                    <h1>{props.nombre}</h1>
                </div>
            </div>
            <div className='Card-data'>
                <div>
                    <div className='Card-info'>
                        <div className='Card-info-name'>
                            {props.activa ? <div className='punto-verde'></div> : <div className='punto-rojo'></div>}

                        </div>
                        <div className='Card-info-value'>
                            {props.activa ? <h3>Activa</h3> : <h3>Inactiva</h3>}

                        </div>
                    </div>
                    <hr />
                    <div className='Card-info-bomba'>
                        <div className='Card-info-name'>
                            <h3>Caudal Actual</h3>
                        </div>
                        <div className='Card-info-value'>
                            <h3>{props.caudal} l/h</h3>
                        </div>
                        <div className='Card-moreInfo' onClick={() => handleClick()}>
                            <p className='Card-plus'>+</p>
                            <div style={open ? { display: "block" } : { display: "none" }}>
                                <p className='Card-description'>{props.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}