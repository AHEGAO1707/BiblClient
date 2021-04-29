import React, {useEffect, useState,} from "react";
import './index.css'
import {Layout, Button} from 'antd';
import {Switch, Route, BrowserRouter, NavLink, Redirect} from "react-router-dom";
import {connect, Provider, useSelector} from 'react-redux';
import HomePage from "../../page/HomePage";
import Auth from "../../page/Auth";
import News from "../../page/News";
import {store} from "../../store/store";
import {closeOrder, getBookStatus} from "../../store/actions/book";

import Cookies from "universal-cookie";
import Catalog from "../../page/Catalog";
import MyBooks from "../../page/MyBooks";

const {Header, Content} = Layout;

const IMAGE_URL = 'https://img.icons8.com/ios/40/ffffff/menu--v1.png';

type PropsType = {
    booksIssue: any
    booksAcceptance: any
}

const App: React.FC<PropsType> = ({ booksIssue, booksAcceptance }) => {

    // tslint:disable-next-line:no-shadowed-variable
    const authState: any = useSelector<any>((store: any) => store.auth);

    const cookies = new Cookies();

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Layout className="layout">
                    <Header className="header">
                        <NavLink to={'/home'} style={{color: 'white'}}>
                            <div className='logo' />
                        </NavLink>
                        <div className="navbar">
                            <img src={IMAGE_URL}/>
                        </div>
                        {(authState.token) || cookies.get('token')
                            ? <>
                                <nav className='links'>
                                    <ul>
                                        <li className={"link-li"}><NavLink to={'/add_book'} style={{color: 'white'}}
                                                                           className='link'>Каталог</NavLink>
                                        </li>
                                        <li className={"link-li"}>
                                            <NavLink to={'#'} style={{color: 'white'}} className='link'>
                                                <Button
                                                    type='text'
                                                    style={{color: 'white'}}
                                                    onClick={() => console.log('1')}
                                                    onFocus={(event) => event.target.blur()}
                                                >Мои книги
                                                </Button>
                                            </NavLink>
                                        </li>
                                        <li className={"link-li"}><NavLink to={'sign_up'} style={{color: 'white'}}
                                                                           className='link'>Получить книгу</NavLink>
                                        </li>
                                    </ul>
                                </nav>
                            </>
                            : null
                        }
                    </Header>

                    <Content>
                        <div className="site-layout-content">
                            <Switch>
                                <Route path="/auth/:uid" component={Auth}/>
                                <Route path="/home" component={HomePage}/>
                                <Route path="/list-books" component={Catalog}/>
                                <Route path="/my-books" component={MyBooks}/>
                                <Route path="/news" component={News}/>
                                {(authState.token) || cookies.get('token')
                                    ? <>
                                        <Route path="/auth/:uid" component={Auth}/>
                                        <Route path="/list-books" component={Catalog}/>
                                        <Route path="/home" component={HomePage}/>
                                        {/*<Route path="/my-books" component={HomePage}/>*/}
                                    </>
                                    : <>
                                        <Redirect to={'/home'}/>
                                    </>}
                            </Switch>
                        </div>
                    </Content>
                </Layout>
            </BrowserRouter>
        </Provider>)

}

const mapStateToProps = (state: any) => {
    return {
        booksAcceptance: state.book.booksAcceptance,
        booksIssue: state.book.booksIssue
    }
};
export default connect(mapStateToProps, {
    getBookStatus,
    closeOrder
})(App);
