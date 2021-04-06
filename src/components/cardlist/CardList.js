import React, { Fragment,useEffect, useState } from 'react';
import Card from '../card/Card';

const CardList = (props) => {
    return (
        <Fragment>
            {props.productList && props.orderList ? (
                <div className="cardlist_container">
                    <div className="card">
                        <i className="fa fa-user-o fa-2x text-lightblue"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Number of Accounts</p>
                            <span className="font-bold text-title">{props.productList.length}</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-calendar fa-2x text-red"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Inactive Accounts</p>
                            <span className="font-bold text-title">{props.orderList.length}</span>
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
            ): null}
        </Fragment>

        )
}

export default CardList;
