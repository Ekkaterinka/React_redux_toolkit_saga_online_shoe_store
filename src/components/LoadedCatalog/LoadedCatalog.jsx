import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getCatalog } from '../../redux/reducers/CatalogSlices'
import { useEffect, useState } from "react";
import Loader from '../Loader';
import CartCatalog from './CartCatalog';
import Category from './Category';

export default function LoadedCatalog({ form }) {
  const items = useSelector((state) => state.сatalog.list);
  const loading = useSelector((state) => state.сatalog.loading);
  const search = useSelector((state) => state.сatalog.search);

  const [category, setCategory] = useState([]);
  const [isActive, setActive] = useState('0');
  const [sum, setSum] = useState(0);
  const [filter, setFilter] = useState('0');

  const dispatch = useDispatch();

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

  return (
    <>
      <div className="row">
        <div className="col">
          <section className="catalog">
            <h2 className="text-center">Каталог</h2>
            {form}
            <Loader loading={loading} />
            <Category category={category} handleClick={handleClick} isActive={isActive} />
            {items.length === 0 && search.length > 0 ?
              <p>Товар не найден</p>
              :
              <div className="row">
                <CartCatalog items={items} />
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