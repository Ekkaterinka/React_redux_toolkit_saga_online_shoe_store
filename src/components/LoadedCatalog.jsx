import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCatalog } from '../redux/reducers/CatalogSlices'
import { useEffect, useState } from "react";
import Loader from '../components/Loader';

export default function LoadedCatalog({ form }) {
  const items = useSelector((state) => state.сatalog.list);
  const loading = useSelector((state) => state.сatalog.loading);
  const [category, setCategory] = useState([]);
  const search = useSelector((state) => state.сatalog.search);
  const [isActive, setActive] = useState('0');
  const dispatch = useDispatch();
  const [sum, setSum] = useState(0);
  const [filter, setFilter] = useState('0');


  function getCategory() {
    fetch(' http://localhost:7070/api/categories')
      .then(response => response.json())
      .then(data => setCategory(data));
  }

  const a = sum;
  const b = filter;
  const c = search;

  useEffect(() => {
    getCategory();
  }, []);

  useEffect(() => {
    dispatch(getCatalog({ search: c, page: a.toString(), filter: b }));
  }, [a, b, c]);
  const downloadMore = (event) => {
    event.preventDefault();
    const more = 6;
    setSum(sum + more);
  };

  const handleClick = (event) => {
    event.preventDefault();
    setActive(event.target.id);
    setFilter((event.target.id).toString());
    setSum(0);
  };

  const Category = category.map((p) =>
    <li className="nav-item" key={p.id}>
      <a id={p.id} key={p.id} className={isActive === p.id.toString() ? "nav-link active" : "nav-link"} onClick={handleClick}>{p.title}</a>
    </li>
  );

  console.log(items)


  const Catalog = items.map((i) =>
    <div className="col-4 d-flex" key={i.id}>
      <div className="card catalog-item-card flex-grow-1 bd-highlight">
        <img src={i.images[0]}
          className="card-img-top img-fluid" alt={i.title} />
        <div className="card-body d-flex flex-column ">
          <p className="card-text mt-auto ">{i.title}</p>
          <p className="card-text mt-auto">{i.price.toLocaleString("ru-RU")} руб.</p>
          <Link to={`/${i.id}`}><button className="btn btn-outline-primary">Заказать</button></Link>

        </div>
      </div>
    </div>);

  return (
    <>
      <div className="row">
        <div className="col">
          <section className="catalog">
            <h2 className="text-center">Каталог</h2>
            {form}
            <Loader loading={loading} />
            <ul className="catalog-categories nav justify-content-center" >
              <li className="nav-item">
                <a id="0" className={isActive === "0" ? "nav-link active" : "nav-link"} onClick={handleClick}>Все</a>
              </li>
              {Category}
            </ul >
            {items.length === 0 && search.length > 0 ? <p>Товар не найден</p> : <div className="row">
              {Catalog}
            </div>}
            <div className="text-center">
              {items.length === 6 ?
                <button className="btn btn-outline-primary" onClick={downloadMore}>Загрузить ещё</button>
                : null}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}