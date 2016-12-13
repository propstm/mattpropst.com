import React from 'react';

import Skills from './Skills';

class Content extends React.Component{
	render(){
		return (
			<div className="contentContainer">
				<div className="about">
					<p>I am a software developer living and working in Boston, MA. Over the past few years I've work in the LAMP Stack, also worked with MS SQL.  Along with web i've also been developing for iOS with Objective-C for the last several years.</p>
					<p>Full stack is a loaded term (the stack seems to change so quickly as of late) but I enjoy being able to create a site an understand the data flow and architecture from front to back.</p>  
				</div>
				<div className="latest">
				</div>
				<Skills />
				<div className="currently">
					<span class="heading">Actively Learning:</span> ReactJS 
					<span class="heading">Reading:</span> Tools of Titans: The Tactics, Routines, and Habits of Billionaires, Icons, and World-Class Performers
					<span class="heading">Listening To (Audiobook):</span>American Buffalo: In Search of a Lost Icon
				</div>
			</div>
		)
	}
}

export default Content;

