import React from "react";
import { Link } from "react-router-dom";


const BlockDetails = props => {
    const { data, active } = props;
    
    return (<div className={`block-details ${active ? "block-details--active" : ""}`}>
        <h3 className="block-details__num">Block #{data.number}</h3>
        <div className="block-details__time">
            {(new Date(data.timestamp * 1000)).toDateString()}
        </div>
        <div className="block-details__hash">{data.hash}</div>
        <div className="block-details__num-txn">
            <Link to={`/block/${data.number}`}>
                {data.transactions.length} transactions
            </Link>
        </div>
    </div>);
};

export default BlockDetails;