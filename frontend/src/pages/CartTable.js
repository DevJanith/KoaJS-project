import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, FloatingLabel, Form, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { getCarts, deleteCart, createCart, updateCart } from "../actions/cartAction";
import Navigation from "../Components/Navigation";

const CartTable = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    useEffect(() => {
        try {
            dispatch(getCarts());
        } catch (error) {
            console.log(error);
        }
    }, [dispatch]);

    return (
        <>
            <Col md={12}>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Customer Identity</th>
                            <th>Total</th>
                            <th>createdDate</th>
                            <th>updatedDate</th>
                        </tr>
                    </thead>
                    <tbody hover={true}>
                        {
                            cart.map((bat, index) => {
                                return (
                                    <>
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{bat.customerID}</td>
                                            <td>{bat.total}</td>
                                            <td>{bat.createdDate}</td>
                                            <td>{bat.updatedDate}</td>
                                        </tr>
                                        <tr>
                                            <th>Item Details</th>
                                        </tr>
                                        <tr>
                                            <th>temId</th>
                                            <th>Item Name</th>
                                            <th>Item Type</th>
                                            <th>Item Qty</th>
                                            <th>Item Price</th>
                                            <th>Item Description</th>
                                            <th> Total</th>
                                        </tr>
                                        {
                                            bat.items.map((ts, index) => {
                                                var total = ts.itemQty * ts.itemPrice;
                                                return (
                                                    <>
                                                        <tr kry={index}>
                                                            <td>{ts.InventoryItemId}</td>
                                                            <td>{ts.itemName}</td>
                                                            <td>{ts.itemType}</td>
                                                            <td>{ts.itemQty}</td>
                                                            <td>{ts.itemPrice}</td>
                                                            <td>{ts.itemDescription}</td>
                                                            <td>{total}</td>
                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }
                                    </>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Col>

        </>
    )
}

export default CartTable