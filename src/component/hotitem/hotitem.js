

import React from 'react';

class HotItem extends React.Component {

    render() {
        return (
            <li className="yxui-item">
                <a href={this.props.url}>
                    <div className="yxui-item-header">
                        <img src={this.props.imgUrl} width="60" height="60" />
                    </div>
                    <div className="yxui-item-body">
                        <p>{this.props.hot}</p>
                    </div>
                </a>
            </li>
        )
    }
}

export default HotItem;
