import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { changeSearchField } from '../redux/reducers/CatalogSlices';
import Index_loaded_Catalog from './Index_loaded_Catalog';
import { useDebounce } from 'use-debounce';
import { useLocation } from 'react-router-dom';

export default function Catalog({route}) {
  const page = useSelector((state) => state.сatalog.page);
  const filter = useSelector((state) => state.сatalog.filter);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = React.useState("");
  const [debouncedValue] = useDebounce(inputValue, 500);
  const location = useLocation();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    dispatch(changeSearchField({ search: debouncedValue, page, filter: filter }));
  }, [debouncedValue]);


  return (
    <>
      <form className="catalog-search-form form-inline" >
        <input className="form-control" placeholder="Поиск" type="search"
           onChange={handleInputChange} value={location.state?.data && location.state?.data}/>
      </form>
      <Index_loaded_Catalog/>
    </>
  )
}



