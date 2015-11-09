
import React from 'react';
import HotItem from '../hotitem/hotitem';

import './hotlist.scss';

class HotList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4 && xhr.status == 200) {
                this.setState({
                    items: JSON.parse(xhr.responseText)
                });
            }
        }.bind(this);
        xhr.open('GET', this.props.source, true);
        xhr.send();
    }

    render() {
        return (
        	<ul className="yxui-items">
	        	{
	        		this.state.items.map((item, i) => {
	        			return ( <HotItem url={item.url} imgUrl={item.imgUrl} hot={item.hot} key={i} /> );
	        		})
	        	}
        	</ul>
        )
    }
}

export default HotList;
