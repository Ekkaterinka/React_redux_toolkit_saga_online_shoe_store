import React from 'react';
import { NavLink } from "react-router-dom";

export default function CartCatalog({items}) {
    return (
        items.map((i) =>
            <div className="col-4 d-flex" key={i.id}>
                <div className="card catalog-item-card flex-grow-1 bd-highlight">
                    <img src={i.images[0]}
                        className="card-img-top img-fluid" alt={i.title} />
                    <div className="card-body d-flex flex-column ">
                        <p className="card-text mt-auto ">{i.title}</p>
                        <p className="card-text mt-auto">{i.price.toLocaleString("ru-RU")} руб.</p>
                        <NavLink to={`/${i.id}`}><button className="btn btn-outline-primary">Заказать</button></NavLink>
                    </div>
                </div>
            </div>)
    )
}
