
import React from 'react';
import { render } from 'react-dom';
import HotList from './component/hotlist/hotlist';

import './index.scss';

render(
	<HotList source="/mock/data.json"/>,
	document.getElementById('app')
);