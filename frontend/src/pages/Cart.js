import React, { useEffect } from 'react';
import { Button, Card, Col, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { getInventories } from "../actions/inventoryAction";
import Navigation from "../Components/Navigation";
import CartTable from './CartTable';

const Cart = () => {

    return (
        <>
            <div style={{ display: "flex" }}>
                <div style={{ flex: 2, margin: "20px" }}>
                    <Navigation />
                </div>
                <div style={{ flex: 6, margin: "20px" }}>
                    <Card>
                        <Card.Header>Cart Management</Card.Header>
                        <Card.Body>
                            <Card.Title>Cart Details</Card.Title>
                            <Row>
                                <CartTable />
                            </Row>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Cart