import React from "react";
import { Link } from "react-router-dom";
import timeago from "timeago.js";


const Block = props => {
    const { data, active, onClick } = props;

    return (<div className={`block ${active ? "block--active" : ""}`}
        onClick={onClick}
    >
        <div className="block--active__bg-bar" />
        <div className="block__num">
            <Link to={`/block/${data.number}`}>
                Block #{data.number}
            </Link>
        </div>
        <div className="block__time">
            {timeago().format(new Date(data.timestamp * 1000))}
        </div>

        <div className="block__hash">{data.hash}</div>
        
        <div className="block__num-txn">
            <Link to={`/block/${data.number}`}>
                {data.transactions.length} transactions
            </Link>
        </div>
    </div>);
};

export default Block;