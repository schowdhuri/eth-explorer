import React from "react";

class Dashboard extends React.Component {
    componentDidMount() {
        this.props.getBlocks();
    }
    render() {
        const { blocks } = this.props;
        return <div>
            {blocks.map(block => <div>{block.number}</div>)}
        </div>;
    }
}

export default Dashboard;
