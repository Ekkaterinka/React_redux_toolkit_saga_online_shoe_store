import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, postCart } from '../redux/reducers/CartSlices';

export default function Cart() {
  const data = useSelector((state) => state.cart.data);
  const [telephone, setTelephone] = useState('');
  const [address, setAddress] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [sum, setSum] = useState(0);
  const dispatch = useDispatch();

  const deleteNote = (id, count) => {
    dispatch(deleteCart({ id: id, count: count }));
  };

  function chengeCheckbox() {
    setCheckbox(!checkbox);
  };

  const handleSumbit = (event) => {
    event.preventDefault()
    const owner = {
      product: data.map(({ id, price, count }) => ({ id, price, count })),
      telephone: telephone,
      address: address
    };
    dispatch(postCart(owner));
    setTelephone(''),
      setAddress(''),
      setCheckbox(false)
  };

  useEffect(() => {
    setSum(data?.reduce((total, m) => total + m.price * m.count, 0))
  }, [data]);

  return (
    <>
      <main className="container">
        <div className="row">
          <div className="col">
            <section className="cart">
              <h2 className="text-center">Корзина</h2>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Название</th>
                    <th scope="col">Размер</th>
                    <th scope="col">Кол-во</th>
                    <th scope="col">Стоимость</th>
                    <th scope="col">Итого</th>
                    <th scope="col">Действия</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((e, index) => {
                    return (
                      < tr key={index} >
                        <td scope="row">{index+1}</td>
                        <td><a href="/products/1.html">{e.title}</a></td>
                        <td>{e.size}</td>
                        <td>{e.count}</td>
                        <td>{Number(e.price).toLocaleString("ru-RU")} руб.</td>
                        <td>{(e.price * e.count).toLocaleString("ru-RU")} руб.</td>
                        <td><button className="btn btn-outline-danger btn-sm" onClick={() => deleteNote(e.id, e.count)}>Удалить</button></td>
                      </tr>
                    )
                  })}
                  <tr>
                    <td colSpan={5} className="text-right">Общая стоимость</td>
                    <td>{sum.toLocaleString("ru-RU")} руб.</td>
                  </tr>
                </tbody>
              </table>
            </section>
            <section className="order">
              <h2 className="text-center">Оформить заказ</h2>
              <div className="card" style={{ maxWidth: 30 + 'rem', margin: 0 + 'auto' }}>
                <form className="card-body" onSubmit={handleSumbit}>
                  <div className="form-group">
                    <label htmlFor="phone">Телефон</label>
                    <input className="form-control" id="phone" placeholder="Ваш телефон" value={telephone} onChange={event => setTelephone(event.target.value)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Адрес доставки</label>
                    <input className="form-control" id="address" placeholder="Адрес доставки" value={address} onChange={event => setAddress(event.target.value)} />
                  </div>
                  <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="agreement" checked={checkbox} onChange={chengeCheckbox} />
                    <label className="form-check-label" htmlFor="agreement"  >Согласен с правилами доставки</label>
                  </div>
                  <button type="submit" className="btn btn-outline-secondary" disabled={!(telephone && address && checkbox)} >Оформить</button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </main >
    </>
  )
}
