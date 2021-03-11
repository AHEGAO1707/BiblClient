import React, {useEffect, useState,} from "react";
import './index.css'
import {Layout, Button, notification, Modal} from 'antd';
import ListBook from "../../page/ListBook";
import {Switch, Route, BrowserRouter, NavLink, Redirect} from "react-router-dom";
import {connect, Provider, useSelector} from 'react-redux';
import BookPage from "../../page/BookPage";
import BookIssue from "../../page/BookIssue";
import SignUp from "../../page/Auth/SignUp";
import SignIn from "../../page/Auth/SignIn";
import AddBook from "../../page/AddBook"
import {store} from "../../store/store";
import AddBookForm from "../../page/AddBookForm";
import {closeOrder, getBookStatus} from "../../store/actions/book";
import ListItemScan from "../../components/ListItemScan";
import CardBookAcceptance from "../../components/CardBookAcceptance";
import CardBookIssue from "../../components/CardBookIssue";
import {RootState} from "../../store/reducers";
import Cookies from "universal-cookie";

const {Header, Content} = Layout;

type PropsType = {
    getBookStatus: (book_example_id: Number) => void
    closeOrder: (book_example_id: Number) => void
    booksIssue: any
    booksAcceptance: any
}


const App: React.FC<PropsType> = ({getBookStatus, closeOrder, booksIssue, booksAcceptance}) => {

    const authState: any = useSelector<RootState>((store) => store.auth);
    const [codeList, setCodeList]: any = useState([])
    const [scan, setScan] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        if (codeList.length > 0) {
            getBookStatus(codeList[codeList.length - 1])
        }
    }, [codeList, getBookStatus])

    useEffect(() => {
        if (scan) {
            let code = "";

            const handleEsc = (event: any) => {
                if (scan) {
                    if (event.keyCode === 13) {
                        if (code.length > 10) {
                            setCodeList((value: []) => [...value, code])
                            code = "";
                        }
                    } else {
                        code += event.key;//while this is not an 'enter' it stores the every key
                    }
                }
            };

            window.addEventListener('keydown', handleEsc);

            return () => {
                window.removeEventListener('keydown', handleEsc);
            };
        }

    }, [scan]);


    const handleScanOpen = () => {
        setIsModalVisible(true);
        setScan((value_scan) => !value_scan)
    }

    const handleScanClose = () => {
        setIsModalVisible(false);
        setScan((value_scan) => !value_scan)
        setCodeList([])
    }

    const handleScanBookAcceptance = () => {
        booksAcceptance.map((item: any) => (
                closeOrder(item.book_example_id)
            )
        )
        notification["success"]({
            message: 'Книга успешно получена'
        });
    };

    const handleScanBookIssue = () => {
        setIsModalVisible(false);
    }

    const cookies = new Cookies();

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Layout className="layout">
                    <Header className="header">
                        <div className='logo'>
                            <NavLink to={'/home'} style={{color: 'white'}}>
                                Электронная библиотека
                            </NavLink>
                        </div>
                        {(authState.token) || cookies.get('token')
                            ? <>
                                <nav className='links'>
                                    <ul>
                                        <li className={"link-li"}><NavLink to={'/add_book'} style={{color: 'white'}}
                                                                           className='link'>Добавить книгу</NavLink>
                                        </li>
                                        <li className={"link-li"}>
                                            <NavLink to={'#'} style={{color: 'white'}} className='link'>
                                                <Button
                                                    type='text'
                                                    style={{color: 'white'}}
                                                    onClick={handleScanOpen}
                                                    onFocus={(event) => event.target.blur()}
                                                >Сканировать
                                                </Button>
                                            </NavLink>
                                        </li>
                                        <li className={"link-li"}><NavLink to={'sign_up'} style={{color: 'white'}}
                                                                           className='link'>Добавить работника</NavLink>
                                        </li>
                                    </ul>
                                </nav>
                                <div className='exit'>
                                    <Button type='text'>Выход</Button>
                                </div>
                            </>
                            : null
                        }
                    </Header>

                    <Modal
                        title="Действия с книгами"
                        visible={isModalVisible}
                        onCancel={handleScanClose}
                        footer={null}
                        maskClosable={false}
                        width={900}
                    >
                        <div className="form-group">
                            <div className="bookIssue">
                                {
                                    booksIssue.length > 0
                                        ?
                                        <div className={"buttonActionScane"}>
                                            <NavLink to={`/issue`}>
                                                <Button
                                                    onClick={handleScanBookIssue}
                                                >Выдать книги
                                                </Button>
                                            </NavLink>
                                        </div>
                                        :
                                        null
                                }
                                <ListItemScan
                                    renderItem={(item: any) => (
                                        item.book_status === "Свободна"
                                            ?
                                            <CardBookIssue
                                                data={item}
                                            />
                                            :
                                            null
                                    )}
                                />
                            </div>
                            <div className="bookAcceptance">
                                {
                                    booksAcceptance.length > 0
                                        ?
                                        <div className={"buttonActionScane"}>
                                            <Button
                                                type="primary"
                                                onClick={handleScanBookAcceptance}
                                            >Принять книги
                                            </Button>
                                        </div>
                                        :
                                        null
                                }
                                <ListItemScan

                                    renderItem={(item: any) => (
                                        item.book_status === "На руках"
                                            ?
                                            <CardBookAcceptance
                                                data={item}
                                            />
                                            :
                                            null
                                    )}
                                />
                            </div>
                        </div>
                    </Modal>

                    <Content style={{padding: '50px'}}>
                        <div className="site-layout-content">
                            <Switch>
                                {(authState.token) || cookies.get('token')
                                    ? <>
                                        <Route path="/book/:book_id" component={BookPage}/>
                                        <Route path="/issue" component={BookIssue}/>
                                        <Route path="/sign_up" component={SignUp}/>
                                        <Route path="/login" component={SignIn}/>
                                        <Route path={"/add_book"} component={AddBook}/>
                                        <Route path={"/form/add_book"} component={AddBookForm}/>
                                        <Route path="/home" component={ListBook}/>
                                    </>

                                    : <>
                                        <Redirect to={'/login'}/>
                                        <Route path="/login" component={SignIn}/>
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
