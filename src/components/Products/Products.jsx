import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../../redux/reducers/ProductSlices";
import { getCart } from "../../redux/reducers/CartSlices";
import { useNavigate } from "react-router-dom";
import Table from "./Table";
import SizeCount from "./SizeCount";

export default function Products() {
    const items = useSelector((state) => state.product.data);
    const dispatch = useDispatch();
    const { id: Id = "" } = useParams();
    const [active, setActive] = useState("");
    const [count, setCount] = useState(0);
    const [size, setSize] = useState('');
    const navigate = useNavigate();

    const handleToggle = (event) => {
        setActive(event.target.id);
        setSize(event.target.getAttribute('name'));
    };

    const inToCart = () => {
        dispatch(getCart({ count: count, size: size, title: items.title, price: items.price, id: items.id }));
        navigate('/Cart');
    };

    useEffect(() => {
        dispatch(getProduct(Id));
    }, [Id]);

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
                                <Table items={items} />
                                <SizeCount
                                    props={{
                                        items: items, isactive: active, count: count, inToCart: inToCart,
                                        handleToggle: handleToggle, size: size, setCount: setCount
                                    }} />
                            </div>
                        </div>
                    </section>
                </div >
            </div >
        </>
    )
}