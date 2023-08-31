import React from 'react'
import { useNavigate, NavLink } from "react-router-dom";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { changeSearchField } from '../../redux/reducers/CatalogSlices';

export default function ControlsPics() {
    const [searchForm, setSearchForm] = useState("false");
    const page = useSelector((state) => state.сatalog.page);
    const filter = useSelector((state) => state.сatalog.filter);
    const count = useSelector((state) => state.cart.count);
    const [data, setData] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    const addSearch = async evt => {
        evt.preventDefault();
        setSearchForm('true');
        dispatch(changeSearchField({ search: data, page: page, filter: filter }));
        if (data.length > 0) {
            return navigate('/Catalog', { state: { data: data } });
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
        <div className="header-controls-pics" >
            <div data-id="search-expander" className="header-controls-pic header-controls-search"
                onClick={addSearch}>
                {searchForm === "true" ?
                    <form data-id="search-form" className="header-controls-search-form form-inline">
                        <input className="form-control" placeholder="Поиск"
                            onChange={handleSearch} value={data} />
                    </form> : null}
            </div>
            <NavLink to={'/Cart'}>
                <div className="header-controls-pic header-controls-cart">
                    {count > 0 && <div className="header-controls-cart-full">{count}</div>}
                    <div className="header-controls-cart-menu"></div>
                </div>
            </NavLink>
        </div>
    )
}
