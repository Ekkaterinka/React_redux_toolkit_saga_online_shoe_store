import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, postCart } from '../../redux/reducers/CartSlices';
import Order from './Order';
import Table from './Table';


const initialcContacts = {
  address: '',
  phone: '',
  checkbox: false
}

export default function Cart() {
  const data = useSelector((state) => state.cart.data);
  const [contacts, setContacts] = useState(initialcContacts);
  const [sum, setSum] = useState(0);
  const dispatch = useDispatch();

  const deleteNote = (id, count) => {
    dispatch(deleteCart({ id: id, count: count }));
  };

  function changeCheckbox() {
    setContacts({ ...contacts, checkbox: !contacts.checkbox })
  };

  const handleContacts = (event) => {
    const { name, value } = event.target;
    setContacts({
      ...contacts,
      [name]: value
    });
  };

  const handleSumbit = (event) => {
    event.preventDefault();
    const owner = {
      product: data.map(({ id, price, count }) => ({ id, price, count })),
      telephone: contacts.phone,
      adress: contacts.address,
    };
    dispatch(postCart(owner));
    setContacts(initialcContacts);
  };

  const disabled = !(contacts.address && contacts.phone && contacts.checkbox) ? true : false;

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
              <Table data={data} sum={sum} deleteNote={deleteNote}/>
            </section>
            <Order props={{
              ...contacts,
              handleContacts: handleContacts, handleSumbit: handleSumbit, changeCheckbox: changeCheckbox, disabled:disabled
            }} />
          </div>
        </div>
      </main >
    </>
  )
}
