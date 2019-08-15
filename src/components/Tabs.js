import React from "react";
import { Scrollbars } from "react-custom-scrollbars";

import "./Tabs.scss";

const Pane = props => {
    return (<div className="tabs__pane">
        <Scrollbars style={{ width: "100%", height: "100%" }}>
            {props.children}
        </Scrollbars>
    </div>)
};

class Tabs extends React.Component {
    constructor() {
        super();
        this.state = {
            active: 0
        };
        this.handleChangeTab = this.handleChangeTab.bind(this);
    }
    handleChangeTab(index) {
        this.setState({ active: index })
    }
    render() {
        const { active } = this.state;
        const panes = this.props.children.filter(
            c => c && c.type === Pane);
        const names = panes.map(p => p.props.name)

        return (<div className="tabs">
            <div className="tabs__buttons">
                {names.map((n, index) => (<button
                    key={`tab-btn-${index}`}
                    className={`tabs__button ${index==active ? "tabs__button--active" : ""}`}
                    onClick={() => this.handleChangeTab(index)}
                >
                    {n}
                </button>))}
            </div>
            <div className="tabs__content">
                {panes[active]}
            </div>
        </div>);
    }
}

Tabs.Pane = Pane;

export default Tabs;