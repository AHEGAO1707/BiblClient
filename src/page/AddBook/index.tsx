import React, {useEffect, useState} from "react";
import {Button, Input, Modal} from 'antd';
import './index.css'
import {connect} from "react-redux";
import { useHistory } from "react-router-dom";
import ListItem from "../../components/ListItem";
import CardAddBook from "../../components/CardAddBook";
import {NavLink} from "react-router-dom";
import { addBookCompilationTrade,
         getBookCompilation,
         selectedBook,
         addExamplesBooks,
    deleteBookCompilation} from "../../store/actions/book";

type PropsType = {
    addBookCompilationTrade: ( data: { trade_code:string } ) => void
    getBookCompilation: () => void
    selectedBook: (data: any) => void
    booksCompilation: any
    addExamplesBooks: (data: any) => void
    deleteBookCompilation: (blanks_book_id: string) => void
}



const AddBook: React.FC<PropsType> = ({
                                          addBookCompilationTrade,
                                          getBookCompilation,
                                          booksCompilation,
                                          selectedBook,
                                          addExamplesBooks,
                                          deleteBookCompilation
                                      }) => {

    const [codeList, setCodeList]: any = useState([])
    const [scan, setScan] = useState(false)

    const [valueForm, setValueForm] = useState("")


    useEffect(() => {
        getBookCompilation()
    }, [getBookCompilation])

    useEffect(() => {
        if ( codeList.length > 0 ) {
            addBookCompilationTrade( { trade_code: codeList[codeList.length - 1] })
        }
    }, [addBookCompilationTrade, codeList])

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


    const handleClickScanner = ( event : any) =>{
        setScan((value_scan) => !value_scan)

    }

    let history = useHistory();
    let data = {}

    const handleClick = () => {
        selectedBook(data)
        history.push("/form/add_book")
    }


    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        addBookCompilationTrade( { trade_code: valueForm})

    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    const handleClickInfoBookAll = () => {
        addExamplesBooks(booksCompilation)
        deleteBookCompilation("0")
    }



    return (
        <div className='add-book-container'>
            <div className="menu">
                <Button
                    size={'large'}
                    onClick={handleClickScanner}
                    onFocus={(event) => event.target.blur()}
                >Сканировать книги
                </Button>
                <Button size={'large'} onClick={showModal}>Добавить по ISBN</Button>

                <Modal
                    title="Добавление книги по ISBN"
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    okText="Сохранить"
                    cancelText="Закрыть"
                    maskClosable={false}
                >
                    <div className="form-group">
                        <Input type="text"
                               className="form-control"
                               id="formDel"
                               aria-describedby="emailHelp"
                               placeholder="Введите номер ISBN"
                               value={valueForm}
                               onChange={(event) => setValueForm(event.target.value)}
                        />
                    </div>
                </Modal>

                <Button size={'large'}>
                    <NavLink to={'/form/add_book'} exact={true} onClick={handleClick}>
                        Заполнить форму
                    </NavLink>
                </Button>



            </div>


            <div className="info_add_book">

                <div className="item_info_book">Общее кол-во книг:
                    <span className="total">
                        {booksCompilation.length}
                    </span>
                </div>
                <div className="item_info_book">Кол-во полных книг: </div>
                <div className="item_info_book">Кол-во неполных книг: </div>
                <Button size={'large'}
                        type="primary"
                        className="item_info_book item_info_book_button"
                        onClick={handleClickInfoBookAll}
                >
                        Добавить все книги
                </Button>
            </div>


                <ListItem

                    renderItem={(item: any, key: number) => (
                        <CardAddBook
                            data={item}
                            selectedBook={selectedBook}
                        />
                    )}
                    data={booksCompilation}
                    params={null}
                />

        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        booksCompilation: state.book.booksCompilation
    }
};

export default connect(mapStateToProps, {
    addBookCompilationTrade,
    getBookCompilation,
    selectedBook,
    addExamplesBooks,
    deleteBookCompilation
})(AddBook);



