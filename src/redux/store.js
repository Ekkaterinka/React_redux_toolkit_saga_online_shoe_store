import createSagaMiddleware from 'redux-saga';
import saga from "./saga";
import { configureStore } from "@reduxjs/toolkit";
import CatalogSlices from './reducers/CatalogSlices';
import ProductSlices from './reducers/ProductSlices';
import TopSalesSlices from './reducers/TopSalesSlices';
import CartSlices from './reducers/CartSlices';

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
    reducer: {
        сatalog: CatalogSlices,
        product: ProductSlices,
        topSales: TopSalesSlices,
        cart: CartSlices
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(saga);

export default store;
