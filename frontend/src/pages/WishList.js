import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, FloatingLabel, Form, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { getWishLists, deleteWishList, createWishList, updateWishList } from "../actions/wishListAction";
import Navigation from "../Components/Navigation";

const WishList = () => {
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(0);
    const formDataState = useSelector((state) => (currentId ? state.wishList.find((value) => value.id === currentId) : null));
    const wishList = useSelector((state) => state.wishList);

    const [formData, setFormData] = useState({
        name: '',
        type: '',
        description: '',
        itemID: '1'
    })

    useEffect(() => {
        try {
            dispatch(getWishLists());
        } catch (error) {
            console.log(error);
        }
    }, [dispatch, currentId]);

    useEffect(() => {
        if (formDataState) setFormData(formDataState);
    }, [formDataState]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(formData)

        if (currentId === 0) {
            dispatch(createWishList(formData));
            clear();
        } else {
            dispatch(updateWishList(currentId, formData));
            clear();
        }
    };

    const handleDelete = (id) => {
        dispatch(deleteWishList(id))
        dispatch(getWishLists());
    }

    const clear = () => {
        setCurrentId(0);
        setFormData(
            {
                name: '',
                contactNo: '',
                email: '',
                address: ''
            }
        );
    };

    return (
        <>
            <div style={{ display: "flex" }}>
                <div style={{ flex: 2, margin: "20px" }}>
                    <Navigation />
                </div>
                <div style={{ flex: 6, margin: "20px" }}>
                    <Card>
                        <Card.Header>WishList Management</Card.Header>
                        <Card.Body>
                            <Card.Title>WishList Details</Card.Title>
                            <Row>
                                <Col md={12}>
                                    <Table striped bordered hover responsive>
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Customer Identity</th>
                                                <th>WishList Description</th>
                                                <th>createdDate</th>
                                                <th>updatedDate</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody hover={true}>
                                            {
                                                wishList.map((cd, index) => {
                                                    return (
                                                        <>
                                                            <tr key={index}>
                                                                <td>{index + 1}</td>
                                                                <td>{cd.customerID}</td>
                                                                <td>{console.log(cd.items)}</td>
                                                                <td>{cd.createdDate}</td>
                                                                <td>{cd.updatedDate}</td>
                                                                <td style={{ display: 'flex' }}>
                                                                    <Button variant="outline-primary" style={{ margin: '1%' }} onClick={() => setCurrentId(cd.id)}>update </Button>
                                                                    <Button variant="outline-danger" style={{ margin: '1%' }} onClick={() => handleDelete(cd.id)}>delete </Button>
                                                                </td>
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
                                                                cd.items.map((ts, index) => {
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
                            </Row>
                            {/* <Card.Title>{currentId == 0 ? "Create WishList" : "Update WishList"}</Card.Title>
                            <Row>
                                <Form onSubmit={handleSubmit}>
                                    <Row className="g-2">
                                        <Col md={6}>
                                            <FloatingLabel controlId="floatingInputGrid" label="WishList Name">
                                                <Form.Control onChange={(e) => setFormData({ ...formData, name: e.target.value })} value={formData.name} name="name" type="text" placeholder='Nimal Gamage' />
                                            </FloatingLabel>
                                        </Col>
                                        <Col md={6}>
                                            <FloatingLabel controlId="floatingSelect" label="WishList Type">
                                                <Form.Select aria-label="Floating label select example" onChange={(e) => setFormData({ ...formData, type: e.target.value })} value={formData.type} name="type">
                                                    <option>WishList Type</option>
                                                    <option value="Daily">Daily</option>
                                                    <option value="Weekly">Weekly</option>
                                                    <option value="Monthly">Monthly</option>
                                                    <option value="Yearly">Yearly</option>
                                                </Form.Select>
                                            </FloatingLabel>
                                        </Col>
                                        <Col md={12}>
                                            <FloatingLabel controlId="floatingInputGrid" label="WishList Description ">
                                                <Form.Control as="textarea" rows={3} onChange={(e) => setFormData({ ...formData, description: e.target.value })} value={formData.description} name="description" type="text" placeholder='Nimal Gamage' />
                                            </FloatingLabel>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md style={{ marginTop: "1%" }} >
                                            <Button type='submit' variant="outline-primary" style={{ float: "right", marginLeft: "1%" }} >{currentId == 0 ? "Create WishList" : "Update WishList"}</Button>
                                            <Button type='button' variant="outline-warning" onClick={clear} style={{ float: "right", marginLeft: "1%" }} >clear</Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Row> */}
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default WishList