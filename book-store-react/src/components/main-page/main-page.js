import React from "react";
import {Container} from "reactstrap";
import Header from "../header/header";
import Catalog from "../catalog/catalog";
import {BrowserRouter as Router} from "react-router-dom";
import {Switch, Route} from "react-router";
import Basket from "../basket/basket";
import ListOrders from "../listOrders/listOrders";
import {GetBasketAction} from "../../redux/actions/basket";

const MainPage = () => {

    return (
        <Container>

            <Router>
             <Header />
               <Switch>


                    <Route exact path="/">
                       <Catalog />
                    </Route>

                    <Route path="/basket">
                       <Basket />
                    </Route>

                   <Route path="/listOrders">
                       <ListOrders />
                   </Route>

                </Switch>
            </Router>
        </Container>
    );
}

export default MainPage;