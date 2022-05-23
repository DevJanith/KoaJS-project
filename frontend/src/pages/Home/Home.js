import React from 'react'
import { Button } from 'react-bootstrap'
import homeImage from "./home-img.png"
import { useNavigate } from 'react-router-dom';




const Home = () => {
    const navigate = useNavigate();
    return (
        <div style={{ display: "flex", flexDirection: "column", margin: '5% 20%' }}>
            <div style={{ flex: 1, margin: '0 5%' }}>
                <h1 style={{ textAlign: "center" }}>Shopping Cart Application</h1>
                <h5 style={{ textAlign: "center" }}>Backend - Koa.js | Frontend - React.js</h5>
            </div>
            <div style={{ margin: "5%" }}>
                <img
                    src={homeImage}
                    alt=""
                    className="image"
                    style={{
                        display: "block",
                        marginLeft: 'auto',
                        marginRight: 'auto'

                    }}
                />
            </div>
            <div style={{ display: "flex", justifyContent: 'space-evenly' }}>
                <Button variant="outline-primary" style={{ margin: '1%', flex: 4 }} onClick={() => {
                    navigate('/customer');
                }}>Customer</Button>
                <Button variant="outline-warning" style={{ margin: '1%', flex: 4 }} onClick={() => {
                    navigate('/trader');
                }}>Trader </Button>
            </div>
        </div>
    )
}

export default Home