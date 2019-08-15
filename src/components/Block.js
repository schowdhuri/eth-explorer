import React from "react";

import "./Block.scss";


const Block = props => {
    const { data, active, onClick } = props;

    return (<div className={`block ${active ? "block--active" : ""}`}
        onClick={onClick}
    >
        <div className="block__icon">
            <i className="icon icon-blocks" />
        </div>
        <div className="block-summary">
            <div className="block__number">Block #{data.number}</div>
            <div className="block__hash">
                    {data.hash.slice(2, 10)}
            </div>
        </div>
    </div>);
};

export default Block;