import React from 'react';

import Skills from './Skills';

class Content extends React.Component{
	render(){
		return (
			<div class="contentContainer">
				<div class="latest">
				</div>
				<Skills />
				<div class="currently">
					<span class="heading">Actively Learning:</span> ReactJS 
					<span class="heading">Reading:</span> Tools of Titans: The Tactics, Routines, and Habits of Billionaires, Icons, and World-Class Performers
					<span class="heading">Listening To (Audiobook):</span>American Buffalo: In Search of a Lost Icon
				</div>
			</div>
		)
	}
}

export default Content;

