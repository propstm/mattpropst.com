import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Match, Miss} from 'react-router';

import './css/style.css';
import App from './components/App';

const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Match pattern="/" component={App} />
			</div>
		</BrowserRouter>
		)
}

render(<Root/>, document.querySelector('#main'))
