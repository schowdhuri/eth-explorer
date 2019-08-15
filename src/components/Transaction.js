import React from "react";

const formatEth = wei => {
    const ethVal = `${(wei / Math.pow(10, 18))}`;
    let [ num, frac ] = ethVal.split(".")
    if(frac)
        return `${num}.${frac.slice(0, 8)}`;
    return num;
};

const formatGas = wei => {
    const ethVal = wei / Math.pow(10, 18);
    return `${ethVal.toFixed(18)}`.replace(/0+$/, "") + " ETH";
}

const fields = [{
    id: "from",
    name: "From"
}, {
    id: "to",
    name: "To"
}, {
    id: "gas",
    name: "Gas",
    transform: formatGas
}, {
    id: "gasPrice",
    name: "Gas Price",
    transform: formatGas
}, {
    id: "nonce",
    name: "Nonce"
}];


class Transaction extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            expanded: false
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({ expanded: !this.state.expanded });
    }
    render() {
        const { data } = this.props;
        const { expanded } = this.state;

        return (<div className="txn">
            <div className={`txn__summary ${expanded ? "txn__summary--expanded" : ""}`} onClick={this.toggle}>
                {expanded
                    ? <i title="Show less"
                        className="icon icon-minus"
                    />
                    : <i title="Show more"
                        className="icon icon-plus" />}
                <div className="txn__summary__hash">
                    {data.hash.slice(2)}
                </div>
                <div className="txn__summary__eth">
                    {formatEth(data.value)}
                    {" "}
                    ETH
                </div>
            </div>
            <div className={`txn__details ${expanded ? "txn__details--active" : ""}`}>
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
            </div>
        </div>);
    }
};

export default Transaction;
