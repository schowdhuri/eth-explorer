import React from "react";
import { Scrollbars } from "react-custom-scrollbars";

import Block from "./Block";
import BlockDetails from "./BlockDetails";
import Transactions from "./TransactionsContainer";
import Tabs from "./Tabs";

import "./Dashboard.scss";


class Dashboard extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            selected: null
        };
        this.loadMore = this.loadMore.bind(this);
        this.select = this.select.bind(this);
    }
    componentDidMount() {
        this.setState({ selected: null });
        this.props.getBlocks();
    }
    componentWillReceiveProps(nextProps) {
        if(!this.state.selected && nextProps.blocks.length > 1) {
            this.setState({
                selected: nextProps.blocks[0].number
            });
        }
    }
    loadMore() {
        const { blocks, isLoading } = this.props;
        if(isLoading)
            return false;
        const last = blocks[blocks.length-1].number;
        this.props.getBlocks(last - 1);
    }
    select(num) {
        this.setState({ selected: num });
    }
    render() {
        const { blocks, isLoading } = this.props;
        const { selected } = this.state;
        const selectedBlock = blocks.find(b => b.number == selected);

        return (<div className="dashboard">
            <div className="blocks">
                <Scrollbars style={{ width: "100%", height: "100%" }}>
                    {blocks.map(block =><Block key={block.number}
                        data={block} onClick={() => this.select(block.number)}
                        active={selected==block.number} />)}
                    
                    <div className="block-action" onClick={this.loadMore}>
                        <div className="block-action__icon">
                            {isLoading
                                ? <i className="icon icon-loading spin" />
                                : <i className="block-action__icon--load-more icon icon-chevron-right" />}
                        </div>
                        <div className="block-action__cta">
                            {isLoading
                                ? "Loading blocks ..."
                                : "Older Blocks"}
                        </div>
                    </div>
                </Scrollbars>
            </div>
            <div className="dashboard__details">
                <Tabs>
                    <Tabs.Pane name="Details">
                        <BlockDetails data={selectedBlock} />
                    </Tabs.Pane>
                    <Tabs.Pane name="Transactions">
                        <Transactions block={selectedBlock} />
                    </Tabs.Pane>
                </Tabs>
            </div>
        </div>);
    }
}

export default Dashboard;
