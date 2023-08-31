import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { changeSearchField } from '../redux/reducers/CatalogSlices';
import LoadedCatalog from '../components/LoadedCatalog/LoadedCatalog'
import { useDebounce } from 'use-debounce';
import { useLocation } from 'react-router-dom';


export default function Catalog() {
  const page = useSelector((state) => state.сatalog.page);
  const filter = useSelector((state) => state.сatalog.filter);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue] = useDebounce(inputValue, 500);
  const location = useLocation();
  const [n, setN] = useState(location.state?.data);

  const handleInputChange = (event) => {
    event.preventDefault();
    setInputValue(event.target.value);
    setN(event.target.value);
  };

  console.log(location.state?.data)

  const search =
    <form className="catalog-search-form form-inline" >
      <input className="form-control" placeholder="Поиск" type="search"
        onChange={handleInputChange} value={n ? n : ""} />
    </form>

  useEffect(() => {
    dispatch(changeSearchField({ search: debouncedValue, page, filter: filter }));
  }, [debouncedValue]);

  return (
    <>
      
      <LoadedCatalog form={search} />
    </>
  )
}



