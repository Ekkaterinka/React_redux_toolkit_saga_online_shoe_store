import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getTopSales } from '../../redux/reducers/TopSalesSlices'
import { useEffect } from "react";
import Loader from '../Loader';
import CartTop from './CartTop';

export default function LoadedTop() {
  const items = useSelector((state) => state.topSales.list);
  const loading = useSelector((state) => state.topSales.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopSales());
  }, []);

  return (
    <>
      <div className="row">
        <div className="col">
          <section className="top-sales">
            <h2 className="text-center">Хиты продаж!</h2>
            <Loader loading={loading} />
            <div className="row">
              {items && <CartTop items={items}/>}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}