import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../redux/reducers/ProductSlices";
import { getCart } from "../redux/reducers/CartSlices";
import { useNavigate } from "react-router-dom";

export default function Products() {
    const items = useSelector((state) => state.product.data);
    const dispatch = useDispatch();
    const { id: Id = "" } = useParams();
    const [active, setActive] = useState("");
    const [count, setCount] = useState(0);
    const [size, setSize] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getProduct(Id));
    }, [Id]);

    const handleToggle = (event) => {
        setActive(event.target.id);
        setSize(event.target.getAttribute('name'));
        console.log(event.target.getAttribute('name'))
    };

    const inToCart = () => {
        dispatch(getCart({ count: count, size: size, title: items.title, price: items.price, id: items.id }));
        navigate('/Cart');
    };

    const sizes = items.sizes?.map((e, index) => {
        if (e.available === true) {
            return (
                <div key={index}>
                    <div className="text-center">
                        <p >Размеры в наличии:
                            <span name={e.size} id={index} className=
                                {active === index.toString() ? "catalog-item-size selected" : "catalog-item-size"} onClick={handleToggle}>{e.size}</span>
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
    });


    return (
        <>
            <div className="row">
                <div className="col">
                    <section className="catalog-item">
                        <h2 className="text-center">{items.title}</h2>
                        <div className="row">
                            <div className="col-5">
                                <img src={items.images?.[0]}
                                    className="img-fluid" alt="" />
                            </div>
                            <div className="col-7">
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <td>Артикул</td>
                                            <td>{items.sku}</td>
                                        </tr>
                                        <tr>
                                            <td>Производитель</td>
                                            <td>{items.manufacturer}</td>
                                        </tr>
                                        <tr>
                                            <td>Цвет</td>
                                            <td>{items.color}</td>
                                        </tr>
                                        <tr>
                                            <td>Материалы</td>
                                            <td>{items.material}</td>
                                        </tr>
                                        <tr>
                                            <td>Сезон</td>
                                            <td>{items.season}</td>
                                        </tr>
                                        <tr>
                                            <td>Повод</td>
                                            <td>{items.reason}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                {sizes}
                            </div>
                        </div>
                    </section>
                </div >
            </div >
        </>
    )
}