import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardList from '../cardlist/CardList';
import Chart from '../charts/Chart';
import Card from '../card/Card';

const Main = () => {
    const [product, setProduct] = useState([]);
    const [order, setOrder] = useState([]);

    const fetchData = async () => {
        const productAPI = "http://localhost:5000/dimproduct";
        const orderAPI = "http://localhost:5000/orders";

        const getProduct = await axios.get(productAPI);
        const getOrder = await axios.get(orderAPI);

         axios.all([getProduct, getOrder]).then(
            axios.spread((...allData) => {
                const allProduct = allData[0].length;
                const allOrder = allData[1].length;

                console.log('allProduct', allProduct);
                setProduct(allProduct);
                setOrder(allOrder);

                return allData;


            })
        )       
    }

    console.log(product);
    console.log(order);


    const getProduct = async () => {
        try {
            const res = await fetch("http://localhost:5000/dimproduct");
            //parse response data to json
            const jsonData = await res.json();
            setProduct(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    const getOrder = async () => {
        try {
            const res = await fetch("http://localhost:5000/orders");
            //parse response data to json
            const jsonData = await res.json();
            setOrder(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
/*        const data = fetchData();
        console.log('data', data);
        const allProduct = data[0];
        const allOrder = data[1];

        setProduct(allProduct);
        setOrder(allOrder);*/
        fetchData();

    }, []);

    return (
        <main>
            <div className="main_container">
                <div className="main_title">
                   {/* //<img src={ } alt="hello" />*/}
                    <div className="main_greeting">
                        <h1>Hello COndersbite</h1>
                        <p>Welcome to the admin dashboard</p>
                    </div>
                </div>

                <div className="main_cards">
                    <div className="cardlist_container">
                        <div className="card">
                            <i className="fa fa-user-o fa-2x text-lightblue"></i>
                            <div className="card_inner">
                                <p className="text-primary-p">Number of Accounts</p>
                                <span className="font-bold text-title">{product}</span>
                            </div>
                        </div>

                        <div className="card">
                            <i className="fa fa-calendar fa-2x text-red"></i>
                            <div className="card_inner">
                                <p className="text-primary-p">Inactive Accounts</p>
                                <span className="font-bold text-title">2</span>
                            </div>
                        </div>

                        <div className="card">
                            <i className="fa fa-video-camera fa-2x text-yellow"></i>
                            <div className="card_inner">
                                <p className="text-primary-p">Number of Videos</p>
                                <span className="font-bold text-title">340</span>
                            </div>
                        </div>

                        <div className="card">
                            <i className="fa fa-thumbs-up fa-2x text-green"></i>
                            <div className="card_inner">
                                <p className="text-primary-p">Number of Likes</p>
                                <span className="font-bold text-title">645</span>
                            </div>
                        </div>
                    </div>
                 </div>

                <div className="charts">
                    <div className="charts_left">
                        <div className="charts_left_title">
                            <div>
                                <h1>Daily Reports</h1>
                                <p>Cupertino, California, USA</p>
                            </div>
                            <i className="fa fa-usd"></i>
                        </div>
                        <Chart />
                    </div>

                    <div className="charts_right">
                        <div className="charts_right_title">
                            <div>
                                <h1>Stats Reports</h1>
                                <p>Cupertino, California, USA</p>
                            </div>
                            <i className="fa fa-usd"></i>
                        </div>

                        <div className="charts_right_cards">
                            <div className="card1">
                                <h1>Income</h1>
                                <p>$75,300</p>
                            </div>

                            <div className="card2">
                                <h1>Sales</h1>
                                <p>$124,200</p>
                            </div>

                            <div className="card3">
                                <h1>Users</h1>
                                <p>3900</p>
                            </div>

                            <div className="card4">
                                <h1>Orders</h1>
                                <p>1881</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;