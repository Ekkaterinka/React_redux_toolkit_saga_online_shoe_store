import React from 'react';
import { NavLink } from "react-router-dom";

export default function FooterNav() {
    return (
        <div className="col">
            <section>
                <h5>Информация</h5>
                <ul className="nav flex-column">
                    <NavLink to='/Catalog' className='nav-link'>Каталог</NavLink>
                    <NavLink to='/About' className='nav-link'>О магазине</NavLink>
                    <NavLink to='/Сontacts' className='nav-link'>Контакты</NavLink>
                </ul>
            </section>
        </div>
    )
}
