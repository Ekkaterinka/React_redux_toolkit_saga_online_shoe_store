import React from 'react'

export default function Order({ props }) {
    const handleSumbit = props.handleSumbit;
    const changeCheckbox = props.changeCheckbox;
    const disabled= props.disabled;
    const handleContacts = props.handleContacts;
    const phone = props.phone;
    const address = props.address;
    const checkbox = props.checkbox;

    return (
        <section className="order">
            <h2 className="text-center">Оформить заказ</h2>
            <div className="card">
                <form className="card-body" onSubmit={handleSumbit}>
                    <div className="form-group">
                        <label htmlFor="phone">Телефон</label>
                        <input className="form-control" id="phone" placeholder="Ваш телефон" name="phone" value={phone} onChange={handleContacts} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Адрес доставки</label>
                        <input className="form-control" id="address" placeholder="Адрес доставки" name="address" value={address} onChange={handleContacts} />
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="agreement" checked={checkbox} onChange={changeCheckbox}/>
                        <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
                    </div>
                    <button type="submit" className="btn btn-outline-secondary" disabled={disabled}>Оформить</button>
                </form>
            </div>
        </section>
    )
}
