/* eslint-disable react/no-deprecated */
import React from "react";
import PropTypes from "prop-types";

import Transaction from "./Transaction";
import { TXNS_PER_PAGE as PAGE_SIZE } from "../constants/pagination";

import "./Transactions.scss";


class Transactions extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            page: 1,
            expanded: null
        };
        this.collapse = this.collapse.bind(this);
        this.expand = this.expand.bind(this);
        this.fillPage = this.fillPage.bind(this);
        this.loadMore = this.loadMore.bind(this);
    }
    collapse() {

    }
    expand() {

    }
    fillPage(block) {
        if(!block)
            block = this.props.block;
        const { page } = this.state;
        const idsOnPage = block.transactions.slice(
            (page - 1) * PAGE_SIZE,
            page * PAGE_SIZE
        );
        this.props.selectBlock(block);
        this.props.getTransactions(idsOnPage);
    }
    loadMore() {
        const { page } = this.state;
        const totalPages = Math.ceil(
            this.props.block.transactions.length / PAGE_SIZE
        );
        if(page < totalPages) {
            this.setState({ page: page + 1}, this.fillPage);
        }
    }
    componentDidMount() {
        this.setState({ page: 1 }, () => {
            this.fillPage();
        });
    }
    componentWillReceiveProps(nextProps) {
        if(!nextProps.block)
            return;
        if(
            !this.props.block && nextProps.block ||
            (this.props.block && this.props.block.number != nextProps.block.number)
        ) {
            this.setState({ page: 1 }, () => {
                this.fillPage(nextProps.block);
            });
        }
    }
    render() {
        const { block, isLoading, transactions } = this.props;
        const { page } = this.state;
        const totalPages = Math.ceil(
            block.transactions.length / PAGE_SIZE
        );
        if(isLoading && !transactions.length) {
            return (<div className="transactions transactions--loading">
                <i className="icon icon-loading spin" />
                {" "}
                Loading transactions ...
            </div>);
        }
        if(!transactions.length) {
            return (<div className="transactions transactions--empty">
                No transactions found
            </div>);
        }
        return (<div className="transactions">
            {transactions.filter(txn => txn.value && txn.value!=="0")
                .map(txn => <Transaction key={txn.hash} data={txn} />)}
            {transactions.length > 0 && page < totalPages
                ? <button
                    className="btn btn-primary btn-load-more-txns"
                    disabled={isLoading}
                    onClick={this.loadMore}
                >
                    Load More Transactions
                    {" "}
                    {isLoading
                        ? <i className="icon icon-loading spin" />
                        : null}
                </button>
                : isLoading || <div className="no-more-txns">
                    {"That's all folks!"}
                </div>}
        </div>);
    }
}
Transactions.propTypes = {
    block: PropTypes.shape({
        number: PropTypes.number,
        transactions: PropTypes.arrayOf(PropTypes.string)
    }),
    getTransactions: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    selectBlock: PropTypes.func.isRequired,
    transactions: PropTypes.arrayOf(PropTypes.shape({
        hash: PropTypes.string
    }))
};

export default Transactions;