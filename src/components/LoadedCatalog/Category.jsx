import React from 'react';

export default function Category({ category, handleClick, isActive }) {
    return (
        <ul className="catalog-categories nav justify-content-center" >
            <li className="nav-item">
                <a id="0" className={isActive === "0" ? "nav-link active" : "nav-link"} onClick={handleClick}>Все</a>
            </li>
            {category.map((p) =>
                <li className="nav-item" key={p.id}>
                    <a id={p.id} key={p.id} className={isActive === p.id.toString() ? "nav-link active" : "nav-link"} onClick={handleClick}>{p.title}</a>
                </li>
            )}
        </ul >
    )
}
