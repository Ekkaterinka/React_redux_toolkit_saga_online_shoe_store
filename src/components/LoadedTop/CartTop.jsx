import React from 'react';
import { NavLink } from 'react-router-dom';

export default function CartTop({items}) {
  return (
    items.map((p) =>
    <div className="col-4 d-flex align-items-stretch" key={p.id}>
      <div className="card flex-grow-1 bd-highlight">
        <img src={p.images[0]}
          className="card-img-top img-fluid" alt={p.title} />
        <div className="card-body d-flex flex-column">
          <p className="card-text">{p.title}</p>
          <p className="card-text mt-auto">{p.price.toLocaleString("ru-RU")} руб.</p>
          <NavLink to={`/${p.id}`}><button className="btn btn-outline-primary">Заказать</button></NavLink>
        </div>
      </div>
    </div>
  )
  )
}
