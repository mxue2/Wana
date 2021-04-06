import React, { Fragment,useEffect, useState } from 'react';

const Card = (props) => {
    const [item, setItem] = useState([]);

    return (
        <Fragment>
            <div className="card">
                <i className="fa fa-user-o fa-2x text-lightblue"></i>
                <div className="card_inner">
                    <p className="text-primary-p">Number of Accounts</p>
                    <span className="font-bold text-title">{item.length}</span>
                </div>
            </div>
        </Fragment>

    )
}

export default Card;

