import React from "react";
import { Link } from "react-router-dom";


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
    name: "Gas Used"
}, {
    id: "gasLimit",
    name: "Gas Limit"
}, {
    id: "nonce",
    name: "Nonce"
}]

const BlockDetails = props => {
    const { data, active } = props;
    
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