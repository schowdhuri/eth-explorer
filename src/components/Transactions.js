import React from "react";
import { Link } from "react-router-dom";

import "./Transactions.scss";

const PAGE_SIZE = 10;

const formatEth = wei => {
    const ethVal = `${(wei / Math.pow(10, 18))}`;
    let [ num, frac ] = ethVal.split(".")
    if(frac)
        return `${num}.${frac.slice(0, 8)}`;
    return num;
};

class Transactions extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            init: false,
            page: 1,
            totalPages: 1
        };
        this.fillPage = this.fillPage.bind(this);
        this.loadMore = this.loadMore.bind(this);
    }
    fillPage(block) {
        if(!block)
            block = this.props.block;
        const { page } = this.state;
        const { transactions } = this.props;
        const idsOnPage = block.transactions.slice(
            (page - 1) * PAGE_SIZE,
            page * PAGE_SIZE
        );
        this.props.getTransactions(idsOnPage);
    }
    loadMore() {
        const { page, totalPages } = this.state;
        if(page < totalPages) {
            this.setState({ page: page + 1}, this.fillPage);
        }
    }
    componentDidMount() {
        this.setState({
            init: true,
            page: 1,
            totalPages: 1
        }, () => {
            this.props.selectBlock(this.props.match.params.blockId);
        });
    }
    componentWillReceiveProps(nextProps) {
        if(!nextProps.block)
            return;
        if(
            !this.props.block && nextProps.block ||
            (this.props.block && this.props.block.number != nextProps.block.number)
        ) {
            this.setState({
                page: 1,
                totalPages: Math.ceil(nextProps.block.transactions.length / PAGE_SIZE)
            }, () => {
                this.fillPage(nextProps.block);
            });
        }
    }
    render() {
        const { block, isLoading, transactions } = this.props;
        
        if(!block || (
                block &&
                block.number != this.props.match.params.blockId
            ) ||
            isLoading && !transactions.length
        ) {
            return <i className="glyphicon glyphicon-refresh spin" />;
        }

        if(!transactions.length) {
            return <p className="alert alert-warning">No transactions</p>;
        }
        return (<div className="transactions">
            {transactions.filter(txn => txn.to).map(txn =>
                (<div key={txn.hash} className="txn-summary">
                    <div className="txn-summary__from">
                        <div className="txn-summary__label">From: </div>
                        <div className="txn-summary__value">{txn.from}</div>
                    </div>
                    <div className="txn-summary__eth">
                        {formatEth(txn.value)}
                        {" "}
                        ETH
                    </div>
                    <div className="txn-summary__to">
                        <div className="txn-summary__label">To: </div>
                        <div className="txn-summary__value">{txn.to}</div>
                    </div>
                    <div className="txn-summary__axn">
                        <Link to={`/block/${block.number}/txn/${txn.hash}`}>Details</Link>
                    </div>
                </div>))}
            {!transactions.length ||
                <button
                    className="btn btn-primary"
                    onClick={this.loadMore}
                >
                    More
                    {" "}
                    {isLoading
                        ? <i className="glyphicon glyphicon-refresh spin" />
                        : null}
                    
                </button>}
        </div>);
    }
};

export default Transactions;