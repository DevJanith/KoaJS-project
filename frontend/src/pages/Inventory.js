import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, FloatingLabel, Form, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { getInventories, deleteInventory, createInventory, updateInventory } from "../actions/inventoryAction";
import { createCart } from "../actions/cartAction";
import Navigation from "../Components/Navigation";

const Inventory = () => {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(0);
  const formDataState = useSelector((state) => (currentId ? state.inventory.find((value) => value.id === currentId) : null));
  const inventory = useSelector((state) => state.inventory);

  const [formData, setFormData] = useState({
    name: '',
    qty: '',
    description: '',
    price: '',
    type: null
  })

  useEffect(() => {
    try {
      dispatch(getInventories());
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
      dispatch(createInventory(formData));
      clear();
    } else {
      dispatch(updateInventory(currentId, formData));
      clear();
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteInventory(id))
    dispatch(getInventories());
  }

  const clear = () => {
    setCurrentId(0);
    setFormData(
      {
        name: '',
        qty: '',
        description: '',
        price: '',
        type: null
      }
    );
  };

  const addItems = (item) => {
    const Data = {
      items: [{
        InventoryItemId: item.id,
        itemName: item.name,
        itemQty: item.qty,
        itemDescription: item.description,
        itemPrice: item.price,
        itemType: item.type
      }],
      customerID: "1",
      total: "",
    }

    dispatch(createCart(Data))
  }

  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 2, margin: "20px" }}>
          <Navigation />
        </div>
        <div style={{ flex: 6, margin: "20px" }}>
          <Card>
            <Card.Header>
              Inventory Management
              <Col md={12}>
                <Button variant="outline-success" style={{ float: "right" }} >View Cart</Button>
              </Col>
            </Card.Header>
            <Card.Body>
              <Card.Title>Inventory Details</Card.Title>
              <Row>
                <Col md={12}>
                  <Table striped bordered hover responsive>
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Type</th>
                        <th style={{ width: "200px" }}>Description</th>
                        <th>createdDate</th>
                        <th>updatedDate</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody hover={true}>
                      {
                        inventory.map((cd, index) => {
                          return (
                            <>
                              <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{cd.name}</td>
                                <td>{cd.qty}</td>
                                <td>{cd.price}</td>
                                <td>{cd.type}</td>
                                <td style={{ width: "200px" }}>{cd.description}</td>
                                <td>{cd.createdDate}</td>
                                <td>{cd.updatedDate}</td>
                                <td style={{ display: 'flex' }}>
                                  <Button variant="outline-danger" style={{ margin: '1%' }} onClick={() => { addItems(cd) }}>Add to Cart</Button>
                                  <Button variant="outline-primary" style={{ margin: '1%' }} onClick={() => setCurrentId(cd.id)}>update </Button>
                                  <Button variant="outline-danger" style={{ margin: '1%' }} onClick={() => handleDelete(cd.id)}>delete </Button>
                                </td>
                              </tr>
                            </>
                          )
                        })
                      }
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <Card.Title>{currentId == 0 ? "Create Inventory" : "Update Inventory"}</Card.Title>
              <Row>
                <Form onSubmit={handleSubmit}>
                  <Row className="g-2">
                    <Col md={6}>
                      <FloatingLabel controlId="floatingInputGrid" label="Item Name">
                        <Form.Control onChange={(e) => setFormData({ ...formData, name: e.target.value })} value={formData.name} name="name" type="text" placeholder='Nimal Gamage' />
                      </FloatingLabel>
                    </Col>
                    <Col md={6}>
                      <FloatingLabel controlId="floatingInputGrid" label="Item Price">
                        <Form.Control onChange={(e) => setFormData({ ...formData, price: e.target.value })} value={formData.price} name="price" type="text" placeholder='Nimal Gamage' />
                      </FloatingLabel>
                    </Col>
                    <Col md={6}>
                      <FloatingLabel controlId="floatingInputGrid" label="Item Qty ">
                        <Form.Control onChange={(e) => setFormData({ ...formData, qty: e.target.value })} value={formData.qty} name="qty" type="text" placeholder='Nimal Gamage' />
                      </FloatingLabel>
                    </Col>
                    <Col md={6}>
                      <FloatingLabel controlId="floatingSelect" label="Item Type">
                        <Form.Select aria-label="Floating label select example" onChange={(e) => setFormData({ ...formData, type: e.target.value })} value={formData.type} name="type">
                          <option>Item Type</option>
                          <option value="Solid">Solid</option>
                          <option value="Liquid">Liquid</option>
                        </Form.Select>
                      </FloatingLabel>
                    </Col>
                    <Col md={12}>
                      <FloatingLabel controlId="floatingInputGrid" label="Item Description ">
                        <Form.Control as="textarea" rows={3} onChange={(e) => setFormData({ ...formData, description: e.target.value })} value={formData.description} name="description" type="text" placeholder='Nimal Gamage' />
                      </FloatingLabel>
                    </Col>
                  </Row>
                  <Row>
                    <Col md style={{ marginTop: "1%" }} >
                      <Button type='submit' variant="outline-primary" style={{ float: "right", marginLeft: "1%" }} >{currentId == 0 ? "Create Item" : "Update Item"}</Button>
                      <Button type='button' variant="outline-warning" onClick={clear} style={{ float: "right", marginLeft: "1%" }} >clear</Button>
                    </Col>
                  </Row>
                </Form>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Inventory