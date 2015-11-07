
import React from 'react';
import { render } from 'react-dom';
import HotList from './component/hotlist/hotlist';

var hots = [{
	url: 'http://i12.tietuku.com/29356f2591826920t.jpg',
	imgUrl: 'http://i12.tietuku.com/29356f2591826920t.jpg',
	hot: '你现在看到的这个示例'
}, {
	url: 'http://i13.tietuku.com/551edd90d3638cfet.jpg',
	imgUrl: 'http://i13.tietuku.com/551edd90d3638cfet.jpg',
	hot: '是我学习React和Webpack以及ES6的开始'
}, {
	url: 'http://i13.tietuku.com/a4c2693a0eb4ab39t.jpg',
	imgUrl: 'http://i13.tietuku.com/a4c2693a0eb4ab39t.jpg',
	hot: '最开始不知道做什么'
}, {
	url: 'http://i13.tietuku.com/d6ee535c39e3b14ct.jpg',
	imgUrl: 'http://i13.tietuku.com/d6ee535c39e3b14ct.jpg',
	hot: '就决定把刚做的项目用React写一下'
}, {
	url: 'http://i13.tietuku.com/335d714ebf9afec0t.jpg',
	imgUrl: 'http://i13.tietuku.com/335d714ebf9afec0t.jpg',
	hot: '这个列表就是其中的一部分'
}, {
	url: 'http://i12.tietuku.com/3cef5bd6b27c0f90t.jpg',
	imgUrl: 'http://i12.tietuku.com/3cef5bd6b27c0f90t.jpg',
	hot: '如果你对这个项目感兴趣'
}, {
	url: 'http://i12.tietuku.com/34f13ff8f2735bb6t.jpg',
	imgUrl: 'http://i12.tietuku.com/34f13ff8f2735bb6t.jpg',
	hot: '就请下载易信, 进入公众号页的精选页面'
}, {
	url: 'http://i13.tietuku.com/686b5d98174ee192t.jpg',
	imgUrl: 'http://i13.tietuku.com/686b5d98174ee192t.jpg',
	hot: '那是我做的.'
}]

render(
	<HotList items={hots} />,
	document.getElementById('app')
);