import React from 'react'

export default function SizeCount({ props }) {
    const items =props.items;
    const active =props.active;
    const count =props.count;
    const inToCart =props.inToCart;
    const handleToggle =props.handleToggle;
    const size = props.size;
    const setCount = props.setCount;


    return (
        items.sizes?.map((el, index) => {
            if (el.available === true) {
                return (
                    <div key={index}>
                        <div className="text-center">
                            <p >Размеры в наличии:
                                <span name={el.size} id={index} className=
                                    {active === index.toString() ? "catalog-item-size selected" : "catalog-item-size"} onClick={handleToggle}>{el.size}</span>
                            </p>
                            <p>Количество: <span className="btn-group btn-group-sm pl-2">
                                <button className="btn btn-secondary" onClick={() => count > 0 && setCount(count - 1)}>-</button>
                                <span className="btn btn-outline-primary" >{count}</span>
                                <button className="btn btn-secondary" onClick={() => count < 10 && setCount(count + 1)}>+</button>
                            </span>
                            </p>

                        </div>
                        <button className="btn btn-danger btn-block btn-lg" disabled={!(size && count)} onClick={inToCart}>В корзину</button>
                    </div>
                )
            }
        })
    )
}
