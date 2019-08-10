import React from "react";
import { Link } from "react-router-dom";
import { Panel } from "react-bootstrap";

import "./Block.scss";

const Block = props => {
    const { data } = props;
    const handleClick = () => {};
    return (<Panel className="block" onClick={handleClick}>
        <Panel.Heading>
            <div className="block__heading">
                <div className="block__heading__num">Block #{data.number}</div>
                <div className="block__heading__time">{data.timestamp}</div>
            </div>
        </Panel.Heading>
        <Panel.Body>
            <div className="block__hash">{data.hash}</div>
            <div className="block__miner">{data.miner}</div>
            <div className="block__num-txn">
                <Link to={`/block/${data.number}`}>
                    {data.transactions.length} transactions
                </Link>
            </div>
        </Panel.Body>
    </Panel>);
};

export default Block;