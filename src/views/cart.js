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
    <div>
      <Container className="">
        <h1>{isEmpty ? "The Cart is Empty" : "The Cart"}</h1>
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
                    <td className="productname">{item.productName}</td>{" "}
                  </div>

                  <div>
                    <td className="price">{item.price}</td>
                  </div>

                  <div className="table2">
                    <Button
                      className="q1"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </Button>
                    <button className="quantity">{item.quantity}</button>
                    <Button
                      className="q2"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </Button>
                    <Button
                      className="danger"
                      variant="danger"
                      onClick={() => removeItem(item.id)}
                    >
                      RemoveItem
                    </Button>
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
            </Col>
          </Row>
        )}
      </Row>
    </div>
  );
};

export default Cart;
