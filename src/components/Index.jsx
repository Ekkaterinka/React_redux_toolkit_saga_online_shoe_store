import React from 'react'
import Index_loaded_Top from './Index_loaded_Top';
import Index_loaded_Catalog from './Index_loaded_Catalog';
import {useSelector } from "react-redux";

export default function Index() {
  const loading = useSelector((state) => state.сatalog.loading);
  const preloader = loading && <div className="preloader">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>

  return (
    <>
      <Index_loaded_Top />
      <Index_loaded_Catalog preloader={preloader} />
    </>
  )
}
