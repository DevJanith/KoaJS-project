import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <ListGroup>
            <Link to={"/customer"} style={{ textDecoration: "none" }}>
                <ListGroup.Item action>
                    Customer Management
                </ListGroup.Item>
            </Link>
            <Link to={"/trader"} style={{ textDecoration: "none" }}>
                <ListGroup.Item action>
                    Trader Management
                </ListGroup.Item>
            </Link>
            <Link to={"/inventory"} style={{ textDecoration: "none" }}>
                <ListGroup.Item action>
                    Inventory Management
                </ListGroup.Item>
            </Link>
            <Link to={"/cart"} style={{ textDecoration: "none" }}>
                <ListGroup.Item action>
                    Cart Management
                </ListGroup.Item>
            </Link>

            <Link to={"/promotion"} style={{ textDecoration: "none" }}>
                <ListGroup.Item action>
                    Promotion Management
                </ListGroup.Item>
            </Link>
            <Link to={"/wish-list"} style={{ textDecoration: "none" }}>
                <ListGroup.Item action>
                    Wish List Management
                </ListGroup.Item>
            </Link>
            <Link to={"/purchase"} style={{ textDecoration: "none" }}>
                <ListGroup.Item action>
                    Purchase Management
                </ListGroup.Item>
            </Link>
        </ListGroup>

    )
}

export default Navigation