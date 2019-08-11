import React from "react";
import { Col, Row } from "react-bootstrap";

import Block from "./Block";
import BlockDetails from "./BlockDetails";

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

        return (<div className="blocks">
            {blocks.map(block =>(<React.Fragment key={block.number}>
                <div
                    className={`blocks__summary ${selected==block.number ? "blocks__summary--active" : ""}`}
                >
                    <Block
                        data={block} onClick={() => this.select(block.number)}
                        active={selected==block.number} />
                </div>
                <div
                    className={`block__details ${selected==block.number ? "--active" : ""}`}
                >
                    <BlockDetails data={block} active={selected==block.number} />
                </div>
            </React.Fragment>))}
        </div>);
    }
}

export default Dashboard;
