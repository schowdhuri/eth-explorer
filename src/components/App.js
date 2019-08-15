import React from "react";

import Dashboard from "./DashboardContainer";
import Transactions from "./TransactionsContainer";

import "../sass/index.scss";


export default props => {
    return <React.Fragment>
        <nav className="navbar">
            <div className="container">
                <a className="navbar__brand" href="#">EthExplorer</a>
            </div>
        </nav>
        <Dashboard />
    </React.Fragment>;
};
