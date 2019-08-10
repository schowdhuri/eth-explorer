import React from "react";
import { Route } from "react-router-dom";

import Dashboard from "./DashboardContainer";
import Transactions from "./TransactionsContainer";

import "../sass/index.scss";


export default props => {
    return <div>
        <nav className="navbar navbar-inverse">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">EthExplorer</a>
                </div>
            </div>
        </nav>
        <div className="container">
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/block/:blockId" component={Transactions} />
        </div>
    </div>;
};
