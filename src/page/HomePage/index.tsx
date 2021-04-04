import React from "react";
import {NavLink} from "react-router-dom";
import "./index.css"

const menu = [
    { title: 'Каталог', link: '/list-books', style: ''},
    { title: 'Мои Книги', link: '/my-books', style: 'page-right'},
    { title: 'Новости', link: '/list-books', style: ''}
]

const TEXT_QR_COD = ' Покажите этот QR-код при получении книги'

const HomePage = () => {
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
                <img src={"qr-code.svg"} alt=""/>
                <div className="barcode-text">
                    { TEXT_QR_COD }
                </div>
            </div>
        </div>
    )
}

export default HomePage
