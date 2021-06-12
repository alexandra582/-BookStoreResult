import React, {useEffect, useState, Component} from "react";
import {connect} from "react-redux";
import {Row, Col, Alert} from "reactstrap";

import {SetListOrders, SetListOrderAction, GetListOrders} from "../../redux/actions/listOrders";
import {selectBooks} from "../../redux/selectors/books";
import {Button} from "reactstrap";

//import ListOrders from "../listOrders/listOrders";
import BookCard from "../book-card/book-card";
import {GetBooks} from "../../redux/actions/books";

import {BootstrapTable,TableHeaderColumn} from 'react-bootstrap-table';

const ListOrders = (props) => {

    useEffect(() => {
        props.getlistOrders();
    }, []);

    return (
        <div>
            <BootstrapTable data={props.listOrders}>
                <TableHeaderColumn isKey dataField='orderDate'>
                    date
                </TableHeaderColumn>
                <TableHeaderColumn dataField='amount'>
                    amount
                </TableHeaderColumn>
            </BootstrapTable>
        </div>
    );
}

const mapStateToProps = state => ({
    listOrders: state.listOrders.listOrders
})

const mapDispatchToProps = dispatch => {
    return {
        getlistOrders: () => dispatch(new GetListOrders())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOrders);