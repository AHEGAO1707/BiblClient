import React, {useEffect, useState} from "react";
import {Button, Card, Col, Form, Input, Row} from "antd";
import "./index.css"
import {NavLink} from "react-router-dom";

const xs = {span: 12, offset: 1}
const lg = {span: 6, offset: 2}

const HomePage = () => {
    return (
        <div className="home-page">
            <div className="listPage">
                <NavLink to={'/list-books'} style={{color: 'black'}} className='link'>
                    <div className="page">
                        <span>Каталог</span>
                        <img src="https://img.icons8.com/ios/35/E63246/view-details.png" alt={"hay"}/>
                    </div>
                </NavLink>
                <NavLink to={'/my-books'} style={{color: 'black'}} className='link'>
                    <div className="page page-right">
                        <img src="https://img.icons8.com/metro/35/55B432/book-stack.png" alt={"hay"}/>
                        <span>Мои Книги</span>
                    </div>
                </NavLink>
                <NavLink to={'/list-books'} style={{color: 'black'}} className='link'>
                    <div className="page">
                        <span>Новости</span>
                        <img src="https://img.icons8.com/ios/35/874BA0/news.png" alt={"hay"}/>
                    </div>
                </NavLink>
            </div>
            <div className="barcode">
                <img src={"qr-code.svg"} alt=""/>
                <div className="barcode-text">
                    Покажите этот QR-код при получении книги
                </div>
            </div>
        </div>
    )
}

export default HomePage
