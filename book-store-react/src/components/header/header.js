import React from "react";
import {Jumbotron, Button} from "reactstrap";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {

    let history = useHistory();
    console.log("kek");

    function toBasket(){
        history.push("/basket");
    }

    function tolistOrders(){
        history.push("/listorders");
    }

    return (
        <Jumbotron>
            <h1 className="display-3">Книжный магазин</h1>
            <p className="lead">Добро пожаловать!</p>
            <hr className="my-2" />
            <p>Здесь Вы можете заказывать книги</p>
            <Link to="/">Каталог               </Link>
            <Link to="/basket">Корзина          </Link>
            <Link to="/listorders">Список заказов</Link>
        </Jumbotron>
    );
}

export default Header;