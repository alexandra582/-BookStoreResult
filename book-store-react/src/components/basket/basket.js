import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Row, Col, Alert} from "reactstrap";

import {SetBasket} from "../../redux/actions/basket";
import {selectBooks} from "../../redux/selectors/books";
import {Button} from "reactstrap";

import BookCard from "../book-card/book-card";

const Basket = (props) => {

    function buy(){
        fetch("http://localhost:8080/orders/create", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(props.basket),
            method: "post"
        }).then(
            response => {
                props.setBasket([]);
                alert("Заказ сохранен!");
            }
        )
    }


    return (
        <div>
            <Button onClick={() => buy()}>Купить</Button>
            <Row xs={"3"}>
                {
                    props.basket && props.basket.map(book => {
                        return (
                            <BookCard isBasket={true} key={`book-${book.id}`} book={book} />
                        )
                    })
                }
            </Row>
        </div>
    );
}

const mapStateToProps = state => ({
    basket: state.basket.basket
})

const mapDispatchToProps = dispatch => {
    return {
        setBasket: (basket) => dispatch(new SetBasket(basket))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);