import React from "react";
import './index.css'
import {connect} from "react-redux";


type PropsType = {
    booksAcceptance: Array<any>
    booksIssue: Array<any>
    renderItem: (item: string, key: number) => any

}

const ListItemScan: React.FC<PropsType> = ({booksAcceptance, booksIssue, renderItem}) => {
    return (
<div>

    {
        booksAcceptance.length > 0
            ?  booksAcceptance.map((booksAcceptance: any, key: number) => (
                renderItem(booksAcceptance, key)
            ) )


            :
            null


    }

    {
        booksIssue.length > 0
            ?  booksIssue.map((booksIssue: any, key: number) => (
                renderItem(booksIssue, key)
            ))

            :
            null


    }

</div>

    )
}

const mapStateToProps = (state: any) => {
    return {
        booksIssue: state.book.booksIssue,
        booksAcceptance: state.book.booksAcceptance,
    }
};


export default connect(mapStateToProps, {
})(ListItemScan);
