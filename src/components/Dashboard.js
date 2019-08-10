import React from "react";
import { Col, Row } from "react-bootstrap";

import Block from "./Block";


class Dashboard extends React.Component {
    componentDidMount() {
        this.props.getBlocks();
    }
    render() {
        const { blocks } = this.props;
        return <Row>
            <Col md={12}>
                {blocks.map(block => <Block
                    key={block.number}
                    data={block} />)}
            </Col>
        </Row>;
    }
}

export default Dashboard;
