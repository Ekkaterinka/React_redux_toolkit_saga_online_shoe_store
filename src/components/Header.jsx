import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { changeSearchField } from '../redux/reducers/CatalogSlices';

export default function Header() {
    const [isActive, setActive] = useState("false");
    const [searchForm, setSearchForm] = useState("false");
    const page = useSelector((state) => state.сatalog.page);
    const filter = useSelector((state) => state.сatalog.filter);
    const count = useSelector((state) => state.cart.count);
    const [data, setData] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleToggle = () => {
        setActive(!isActive);
    };

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    const addSearch = async evt => {
        evt.preventDefault();
        setSearchForm('true');
        dispatch(changeSearchField({ search: data, page: page, filter: filter }));
        if (data.length > 0) {
            return navigate('/Catalog', {state:{data:data}});
        }
        await delay(5000);
        if (data.length === 0) {
            return setSearchForm('false');
        };
        setData('');

    }
    const handleSearch = (evt) => {
        evt.preventDefault();
        setData(evt.target.value);
    };

    return (
        <>
            <header className='container'>
                <div className='row'>
                    <div className='col'>
                        <nav className='navbar navbar-expand-sm navbar-light bg-light'>
                            <Link to='/' className='"navbar-brand"'>
                                <img src="./image/header-logo.png" alt="Bosa Noga" />
                            </Link>
                            <div className='collapase navbar-collapse'>
                                <ul className='navbar-nav mr-auto'>
                                    <li className={isActive ? "nav-item" : "nav-item active"} onClick={handleToggle}><Link to='/' className='nav-link'>Главная</Link> </li>
                                    <li className={isActive ? "nav-item" : "nav-item active"} onClick={handleToggle}><Link to='/Catalog' className='nav-link'>Каталог</Link></li>
                                    <li className={isActive ? "nav-item" : "nav-item active"} onClick={handleToggle}><Link to='/About' className='nav-link'>О магазине</Link></li>
                                    <li className={isActive ? "nav-item" : "nav-item active"} onClick={handleToggle}><Link to='/Сontacts' className='nav-link'>Контакты</Link></li>
                                </ul>
                                <div style={{ flexGrow: "1" }}>
                                    <div className="header-controls-pics" >
                                        <div data-id="search-expander" className="header-controls-pic header-controls-search"
                                            onClick={addSearch}>
                                            {searchForm === "true" ?
                                                <form data-id="search-form" className="header-controls-search-form form-inline">
                                                    <input className="form-control" placeholder="Поиск"
                                                        onChange={handleSearch} value={data}/>
                                                </form> : null}
                                        </div>
                                        <Link to={'/Cart'}><div className="header-controls-pic header-controls-cart">
                                            {count > 0 && <div className="header-controls-cart-full">{count}</div>}
                                            <div className="header-controls-cart-menu"></div>
                                        </div></Link>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header >
        </>
    )
}


