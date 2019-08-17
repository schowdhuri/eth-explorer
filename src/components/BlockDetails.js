import React from "react";

import formatGas from "../utils/formatGas";

import "./BlockDetails.scss";


const fields = [{
    id: "number",
    name: "Height"
}, {
    id: "timestamp",
    name: "TimeStamp",
    transform: val => (new Date(val*1000)).toString()
}, {
    id: "hash",
    name: "Hash"
}, {
    id: "parentHash",
    name: "Parent Hash"
}, {
    id: "miner",
    name: "Mined By"
}, {
    id: "difficulty",
    name: "Difficulty"
}, {
    id: "totalDifficulty",
    name: "Total Difficulty"
}, {
    id: "size",
    name: "Size",
    transform: val => `${val} bytes`
}, {
    id: "gasUsed",
    name: "Gas Used",
    transform: formatGas
}, {
    id: "gasLimit",
    name: "Gas Limit",
    transform: formatGas
}, {
    id: "nonce",
    name: "Nonce"
}, {
    id: "transactions",
    name: "Transactions",
    transform: val => val.length
}];

const BlockDetails = props => {
    const { data, active } = props;
    if(!data)
        return null;
    return (<div className={`block-details ${active ? "block-details--active" : ""}`}>
        <dl>
            {fields.map(field => (<React.Fragment key={field.id}>
                <dt className="block-details__label">{field.name}</dt>
                <dd className="block-details__value">
                    {field.transform
                        ? field.transform(data[field.id])
                        : data[field.id]}
                </dd>
            </React.Fragment>))}
        </dl>
    </div>);
};

export default BlockDetails;