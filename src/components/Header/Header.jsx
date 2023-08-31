import React from 'react';
import ControlsPics from './ControlsPics';
import { NavLink } from "react-router-dom";

export default function Header() {

    return (
        <>
            <header className='container'>
                <div className='row'>
                    <div className='col'>
                        <nav className='navbar navbar-expand-sm navbar-light bg-light'>
                            <NavLink to='/' className="navbar-brand">
                                <img src="./image/header-logo.png" alt="Bosa Noga" />
                            </NavLink>
                            <div className='collapase navbar-collapse'>
                                <ul className='navbar-nav mr-auto'>
                                    <NavLink to='/' className='nav-link'>Главная</NavLink>
                                    <NavLink to='/Catalog' className='nav-link'>Каталог</NavLink>
                                    <NavLink to='/About' className='nav-link'>О магазине</NavLink>
                                    <NavLink to='/Сontacts' className='nav-link'>Контакты</NavLink>
                                </ul>
                                <ControlsPics />
                            </div>
                        </nav>
                    </div>
                </div>
            </header >
        </>
    )
}


