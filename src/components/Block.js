import React from "react";
import PropTypes from "prop-types";

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
Block.propTypes = {
    active: PropTypes.bool,
    data: PropTypes.shape({
        number: PropTypes.string.number,
        hash: PropTypes.string.isRequired
    }),
    onClick: PropTypes.func.isRequired
};

export default Block;