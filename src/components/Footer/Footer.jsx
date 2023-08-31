import React from 'react';
import FooterPay from './FooterPay';
import FooterNav from './FooterNav';
import FooterContacts from './FooterContacts';

export default function Footer() {
    return (
        <>
            <footer className="container bg-light footer">
                <div className="row">
                    <FooterNav />
                    <div className="col">
                        <section>
                            <h5>Принимаем к оплате:</h5>
                            <FooterPay />
                        </section>
                        <section>
                            <div className="footer-copyright">2009-2019 © BosaNoga.ru — модный интернет-магазин обуви и аксессуаров.
                                Все права защищены.<br />Доставка по всей России!
                            </div>
                        </section>
                    </div>
                    <FooterContacts />
                </div>
            </footer>
        </>
    )
}
