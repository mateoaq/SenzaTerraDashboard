import React from 'react';
import './SideBar.css'
import logo from '../../assets/logo.png'
export const SideBar = () => {
    return (
        <div className='SideBar'>
            <div className='SideBar-container'>
                <div className='SideBar-logo'>
                    <figure><img src={logo}></img></figure>
                </div>

                <div className='SideBar-subContainer' >
                    <div className='SideBar-button'>
                        <button className='button-primary'>Inicio</button>
                    </div>
                    <div className='SideBar-button'>
                        <button className='button-primary'>Camaras</button>
                    </div>
                    <div className='SideBar-button'>
                        <button className='button-primary'>Historial</button>
                    </div>
                </div>
            </div>
        </div>
    )
}