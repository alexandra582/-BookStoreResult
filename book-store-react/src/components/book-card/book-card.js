import React from "react";
import {Alert, Col} from "reactstrap";
import AuthorLink from "../author-link/author-link";
import {Button} from "reactstrap";
import {SetBasket} from "../../redux/actions/basket";
import {connect} from "react-redux";

const BookCard = (props) => {

    function addBook(){
       let copyBasket = props.basket.slice();
       copyBasket.push(props.book);
       props.setBasket(copyBasket);
    }

    return (
        <Col>
            <h3>{props.book.title}</h3>
            {!props.isBasket &&
            <Button onClick={() => addBook()}>+</Button>
            }

            <p>
                {
                    props.book.author
                }
            </p>

            <p>
                {
                    props.book.genres.map(genre => genre.name).join(" ")
                }
            </p>

            <Alert color={"success"}>{props.book.price}</Alert>
        </Col>
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

export default connect(mapStateToProps, mapDispatchToProps)(BookCard);
