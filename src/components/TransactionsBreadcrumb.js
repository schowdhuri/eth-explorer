import React from "react";

import "./Breadcrumb.scss";


const TxnBreadcrumb = props => (<nav className="breadcrumb-nav">
    <div className="container">
        <ul className="breadcrumb-nav__items">
            <li className="breadcrumb-nav__item">
                <a href="#/">&lt; Back</a>
            </li>
            <li className="breadcrumb-nav__item breadcrumb-nav__item--active">
                Block #{props.match.params.blockId}
            </li>
        </ul>
    </div>
</nav>);

export default TxnBreadcrumb;
