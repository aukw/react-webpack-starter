
import React from 'react';
import HotItem from '../hotitem/hotitem';

import './hotlist.scss';

class HotList extends React.Component {

    render() {
        return (
        	<ul className="yxui-items">
	        	{
	        		this.props.items.map((item, i) => {
	        			return ( <HotItem url={item.url} imgUrl={item.imgUrl} hot={item.hot} key={i} /> );
	        		})
	        	}
        	</ul>
        )
    }
}

export default HotList;
