import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTopSales } from '../redux/reducers/TopSalesSlices'
import { useEffect } from "react";

export default function Index_loaded_Top() {
  const items = useSelector((state) => state.topSales.list);
  const loading = useSelector((state) => state.topSales.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopSales());
  }, []);

  const Data = items.map((p) =>
    <div className="col-4 d-flex align-items-stretch" key={p.id}>
      <div className="card">
        <img src={p.images[0]}
          className="card-img-top img-fluid" alt={p.title} />
        <div className="card-body d-flex flex-column">
          <p className="card-text mt-auto">{p.title}</p>
          <p className="card-text mt-auto">{p.price.toLocaleString("ru-RU")} руб.</p>
          <Link to={`/${p.id}`}><button className="btn btn-outline-primary">Заказать</button></Link>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <div className="row">
        <div className="col">
          <section className="top-sales">
            <h2 className="text-center">Хиты продаж!</h2>

            <div className="row">
              {loading && <div className="preloader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>}
              {items && Data}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}