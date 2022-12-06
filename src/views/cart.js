import React, { useState } from "react";
import { Button, Container, Col, Row, Table } from "react-bootstrap";
import { useCart } from "react-use-cart";
import "../views/cart.css";

const Cart = () => {
  const {
    isEmpty,
    items,
    removeItem,
    cartTotal,
    updateItemQuantity,
    emptyCart,
  } = useCart();

  const [price, setPrice] = useState(0);

  return (
    <div className="t">
      <Container className="">
        <h1>{isEmpty ? "The Cart is Empty" : "Here Is Your Products"}</h1>
      </Container>
      <Row className="row">
        <Table striped bordered hover variant="dark" className="table">
          <tbody>
            {items.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="image">
                    <div className="photo">
                      <img src={item.image} />{" "}
                    </div>
                  </td>
                  <div className="name">
                    <td className="productname">{item.productName}</td>
                  </div>

                  <div>
                    <td className="price">{item.price}</td>
                  </div>

                  <div className="table2">
                    <button
                      className="q1"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                   <button className="quantity">{item.quantity}</button>
                   <button
                      className="q2"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  
                    <button
                      className="danger"
                      variant="danger"
                      onClick={() => removeItem(item.id)}
                    >
                      RemoveItem
                    </button>
                    </div>
                  
                  
                </tr>
              );
            })}
          </tbody>
        </Table>
        {!isEmpty && (
          <Row>
            <Col>
              <h4 className="total">Total Price: Rwf .{price}</h4>
            </Col>
            <Col>
              <Button className="cart" onClick={() => emptyCart()}>
                Clear Cart
              </Button>

              <Button className="chec">
                Proceed to Chekout
              </Button>
            </Col>
          </Row>
        )}
      </Row>
    </div>
  );
};

export default Cart;
