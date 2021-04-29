import React from "react";
import {NavLink} from "react-router-dom";
import "./index.css";

const menu = [
    {title: 'Каталог', link: '/list-books', style: ''},
    {title: 'Мои Книги', link: '/my-books', style: 'page-right'},
    {title: 'Новости', link: '/list-books', style: ''}
]

const TEXT_QR_COD = ' Покажите этот штрихкод при получении книги'

const Barcode = require('react-barcode');
const QRCode = require('qrcode.react');


function make() {         //заглушка для генерации id студента
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

const stud_id = make();


const HomePage = () => {
    {
        console.log(stud_id)
    }
    return (
        <div className="home-page">
            <div className="listPage">
                {
                    menu.map((item) => (
                        <NavLink to={item.link} className='link' key={item.title}>
                            <div className={`page ${item.style}`}>
                                <span>{item.title}</span>
                            </div>
                        </NavLink>
                    ))
                }
            </div>
            <div className="barcode">
                <QRCode value={stud_id}
                        bgColor="transparent"
                        displayValue={false}
                        size={250}
                        level={'H'}
                />
                <Barcode
                    value={stud_id}
                    background="transparent"
                    displayValue={false}
                />
                <div className="barcode-text">
                    {TEXT_QR_COD}
                </div>
            </div>
        </div>
    )
}

export default HomePage
