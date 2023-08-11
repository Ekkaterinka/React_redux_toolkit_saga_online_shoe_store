export const fetchDataCatalog = async (filter) => {
    console.log(filter)
    const params = new
        URLSearchParams({ q: filter.search });
    const i = (filter.filter > 0) ? ('categoryId=' + filter.filter + '&' + 'offset=' + filter.page) : ('offset=' + filter.page);
    const data = filter.search ? params + '&' + i : i;
    const response = await
        fetch(`http://localhost:7070/api/items?${data}`);
    if (!response.ok) {
        throw new
            Error(error);
    }
    return await response.json();
}

export const fetchDataTopSales = async () => {
    const response = await
        fetch(`http://localhost:7070/api/top-sales`);
    if (!response.ok) {
        throw new
            Error(error);
    }
    return await response.json();
}


export const fetchDataProducts = async (id) => {
    const response = await
        fetch(`http://localhost:7070/api/items/${id}`);
    if (!response.ok) {
        throw new
            Error(error);
    }
    return await response.json();
}


export const fetchPostCart = async (order) => {
    const response = await
    fetch('http://localhost:7070/api/order', {
        method: 'POST',
        body: JSON.stringify({
            "owner": {
                "phone": order.telephone,
                "address": order.address,
            },
            "items": order.product
        }),
        headers: {
            'Content-Type': 'application/json'
        }

    });
    return response.status===204 ? alert("Ваш заказ отправлен."): null;
}



