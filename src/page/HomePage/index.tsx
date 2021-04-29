import React from "react";
import {NavLink} from "react-router-dom";
import "./index.css";

const menu = [
    { title: 'Каталог', link: '/list-books', style: ''},
    { title: 'Мои Книги', link: '/my-books', style: 'page-right'},
    { title: 'Новости', link: '/list-books', style: ''}
]

const TEXT_QR_COD = ' Покажите этот штрихкод при получении книги'

var Barcode = require('react-barcode')
// var QRCode = require('qrcode.react')

function makeid() {         //заглушка для генерации id студента
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
const stud_id=makeid();
  


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
                {/* <img src={"qr-code.svg"} alt=""/> */}
                <Barcode value={stud_id} background="transparent"/>
                {/* <QRCode value={stud_id} bgColor="transparent" /> */}
                <div className="barcode-text">
                    { TEXT_QR_COD }
                </div>
            </div>
        </div>
    )
}

export default HomePage
