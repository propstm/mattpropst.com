import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Watch, Route, Switch} from 'react-router';

import './css/style.css';
import App from './components/App';

const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<App />
			</div>
		</BrowserRouter>
		)
}

render(<Root/>, document.querySelector('#main'))
