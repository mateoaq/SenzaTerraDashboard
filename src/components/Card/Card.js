import React from 'react';
import './Card.css'

export const Card = (props) => {
    return (
        <div className='Card'>
            {props.nivel < 50 ?
                <div className='Card-title Card-title-red'>
                    <div>
                        <h1>{props.nombre}</h1>
                    </div>
                </div>
                :

                <div className='Card-title'>
                    <div>
                        <h1>{props.nombre}</h1>
                    </div>
                </div>

            }
            <div className='Card-data'>
                <div>
                    <div className='Card-info'>
                        <div className='Card-info-name'>
                            <h3>CE</h3>
                        </div>
                        <div className='Card-info-value'>
                            <h3>{props.ce}</h3>
                        </div>
                    </div>
                    <hr />
                    <div className='Card-info'>
                        <div className='Card-info-name'>
                            <h3>pH</h3>
                        </div>
                        <div className='Card-info-value'>
                            <h3>{props.pH}</h3>
                        </div>
                    </div>
                    <hr />
                    <div className='Card-info'>
                        <div className='Card-info-name'>
                            <h3>Nivel</h3>
                        </div>
                        <div className='Card-info-value'>
                            <h3>{props.nivel}%</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}