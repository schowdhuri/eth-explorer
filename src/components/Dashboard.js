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
        this.select = this.select.bind(this);
    }
    select(num) {
        this.setState({ selected: num });
    }
    componentDidMount() {
        this.setState({ selected: null });
        this.props.getBlocks();
    }
    componentWillReceiveProps(nextProps) {
        if(!this.state.selected && nextProps.blocks.length > 1) {
            this.setState({
                selected: nextProps.blocks[0].number
            })
        }
    }
    render() {
        const { blocks } = this.props;
        const { selected } = this.state;
        const selectedBlock = blocks.find(b => b.number == selected);

        return (<div className="dashboard">
            <div className="blocks">
                <Scrollbars style={{ width: "100%", height: "100%" }}>
                    {blocks.map(block =><Block key={block.number}
                        data={block} onClick={() => this.select(block.number)}
                        active={selected==block.number} />)}
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
