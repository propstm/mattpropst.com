import React from 'react';
import Header from './Header';
import Skills from './Skills';

class Content extends React.Component{
	render(){
		return (
			<div className="contentContainer">
				<Header />
				<div className="about">
					<p>I am a software developer living and working in Boston, MA. Over the past few years I've work in the LAMP Stack, also worked with MS SQL.  Along with web i've also been developing for iOS with Objective-C for the last several years. Full stack is a loaded term (the stack seems to change so quickly as of late) but I enjoy being able to create a site an understand the data flow and architecture from front to back.</p>  
					<p>I decided to create this site because I didn't have an updated website or portfolio online, and this site could serve as a good sample project while learning React. While I may be missing a few features I know i'd like to continue to build out this site to include a blog, contact form, and portfolio.</p>
				</div>
				<div className="latest">
				</div>
				<div className="skills">
					<p><span className="heading">Skills:</span> JavaScript, CSS3, HTML5, Mobile & Responsive Design, PHP, MySQL, Objective-C / iOS</p>
				</div>
				<div className="currently">
					<p><span className="heading">Actively Learning:</span> <a href="https://reactforbeginners.com/" target="_blank">ReactJS</a> </p>
					<p><span className="heading">Reading:</span> <a href="https://www.amazon.com/Tools-Titans-Billionaires-World-Class-Performers/dp/1328683788/ref=sr_1_1?ie=UTF8&qid=1481673272&sr=8-1&keywords=tools+of+titans" target="_blank">Tools of Titans: The Tactics, Routines, and Habits of Billionaires, Icons, and World-Class Performers</a></p>
					<p><span className="heading">Listening To (Audiobook):</span> <a href="http://www.audible.com/pd/Science-Technology/American-Buffalo-Audiobook/B0036ZH8RE" target="_blank">American Buffalo: In Search of a Lost Icon</a></p>
				</div>
			</div>
		)
	}
}

export default Content;

