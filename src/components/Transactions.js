import React from "react";
import { Breadcrumb, Panel } from "react-bootstrap";

const PAGE_SIZE = 10;

class Transactions extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
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
        this.props.selectBlock(this.props.match.params.blockId);
    }
    componentWillReceiveProps(nextProps) {
        if(!nextProps.block)
            return;
        if(!this.props.block && nextProps.block) {
            this.setState({
                page: 1,
                totalPages: Math.ceil(nextProps.block.transactions.length / PAGE_SIZE)
            }, () => {
                this.fillPage(nextProps.block);
            });
        }
    }
    render() {
        const { block, transactions } = this.props;
        
        return (<div className="transactions">
            <Breadcrumb>
                <Breadcrumb.Item href="#/">&lt; Back</Breadcrumb.Item>
                {!block || <Breadcrumb.Item active>
                    Block #{block.number}</Breadcrumb.Item>}
            </Breadcrumb>
            {transactions.filter(txn => txn.to).map(txn =>
                (<Panel key={txn.hash} className="transactions__txn">
                    <Panel.Body>
                        <div className="transactions__txn__from">{txn.from}</div>
                        <div className="transactions__txn__value">{txn.value}</div>
                    </Panel.Body>
                </Panel>))}
            {!transactions.length ||
                <button className="btn btn-primary" onClick={this.loadMore}>More</button>}
        </div>);
    }
};

export default Transactions;